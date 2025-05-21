import { NextFunction, Request, Response } from "express";
import { Server_Config } from "../config/server.config";
import { ZodError } from "zod";
import { manageErrors } from "./manageErrors";
import AppError from "./app.error";
import status from 'http-status';

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = status.NOT_FOUND;
    let message = "Something went wrong";
    let errorSources = [
        {
            message: '',
            path: '',
        },
    ];
    // check zod error
    if (err instanceof ZodError) {
        const errors = manageErrors.zodError(err);
        statusCode = errors.statusCode;
        message = errors.message;
        errorSources = errors.errorSources;
    }

    // check mongoose error
    else if (err.name === 'ValidationError') {
        const errors = manageErrors.mongooseError(err);
        statusCode = errors.statusCode;
        message = errors.message;
        errorSources = errors.errorSources;
    }

    else if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errorSources = [
            {
                message: err.message,
                path: '',
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                message: err.message,
                path: '',
            },
        ];
    }


    // send response
    res.status(statusCode).send({
        success: false,
        message,
        error: errorSources,
        stack: Server_Config.ENV_TYPE === 'development' ? err.stack : null
    })
}

// export
export default globalErrorHandler;