import { TMessage } from "./message.interface";
import { MessageModel } from "./message.schema";

const saveMessageIntoDB = async(payload:TMessage)=>{
      const result = await MessageModel.create(payload)
      return result;
}

const getAllMessageFromDB =async()=>{
      const result = await MessageModel.find()
      return result
}

export const messageServices ={
      saveMessageIntoDB,
      getAllMessageFromDB
}