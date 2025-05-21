import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { authServices } from "./auth.service";
import status from "http-status";
// register a user
const registerNewUser = catchAsync(async (req, res) => {
    const result = await authServices.registerUserIntoDB(req.body);
    sendResponse(res, {
        message: "User Registered Successfully",
        statusCode: status.CREATED,
        data: result
    })
})
const loginUser = catchAsync(async (req, res) => {
    const result = await authServices.loginUserFromDb(req.body);
    res.cookie("token", result?.token)
    sendResponse(res, {
        message: "User LoggedIn Successfully",
        statusCode: status.OK,
        data: result
    })
})


export const authControllers = {
    registerNewUser,
    loginUser
}