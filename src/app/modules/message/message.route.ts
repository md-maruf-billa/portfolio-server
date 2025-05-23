import { Router } from "express";
import { messageControllers } from "./message.controller";
import auth from './../../utils/checkUserTokenIsValid';

const messageRoute = Router()

messageRoute.post("/", messageControllers.createMessage)
messageRoute.get("/", auth(), messageControllers.getAllMessage)
messageRoute.patch("/:id", messageControllers.mark_as_red)


export default messageRoute