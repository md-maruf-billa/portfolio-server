import { Router } from "express";
import { messageControllers } from "./message.controller";

const messageRoute = Router()

messageRoute.post("/", messageControllers.createMessage)
messageRoute.get("/",messageControllers.getAllMessage)


export default messageRoute