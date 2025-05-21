import { ZodError } from "zod";
import { TErrorRes } from "./error.types";
import mongoose from "mongoose";
import  status  from 'http-status';

const zodError = (err: ZodError): TErrorRes => {
    const errors = err.issues.map((issue) => {
        return {
            message: issue.message,
            path: issue.path[issue.path.length - 1] as string,
        };
    });

    return {
        statusCode: status.BAD_REQUEST,
        message: 'Validation Failed !!',
        errorSources: errors,
    };
}

const mongooseError = (
    err: mongoose.Error.ValidationError,
): TErrorRes => {
    const errors = Object.values(err.errors).map((issue) => {
        return {
            message: issue.message,
            path: issue.name,
        };
    });

    return {
        statusCode: status.BAD_REQUEST,
        message: 'Validation Failed !!',
        errorSources: errors,
    };
};

export const manageErrors = {
    zodError,
    mongooseError
}