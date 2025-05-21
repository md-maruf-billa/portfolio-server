import { Response } from "express";
type Payload = {
    success: boolean;
    message: string;
    statusCode: number;
    data?: any
}

const sendResponse = (res: Response, payload: Payload) => {
    res
        .status(payload.statusCode as number)
        .send({
            success: true,
            message: payload.message,
            data: payload.data
        })
}

export default sendResponse;