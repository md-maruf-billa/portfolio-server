import { model, Schema } from 'mongoose'
import { TMessage } from './message.interface'

const messageSchema = new Schema<TMessage>({
  messageBody: {
    type: String,
    required: true
  },
  messageTitle: {
    type: String,
    required: true
  },
  user: {
    email: String,
    name: String,
    photo: String
  }
},{timestamps:true})

export const MessageModel = model("message", messageSchema)