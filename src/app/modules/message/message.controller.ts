import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { messageServices } from './message.service'
import  status  from 'http-status';

const createMessage = catchAsync(async (req, res) => {
  const result = await messageServices.saveMessageIntoDB(req.body)
  sendResponse(res, {
    message: 'Message send successfully',
    data: result,
    statusCode: status.CREATED
  })
})

const getAllMessage = catchAsync(async (req,res)=>{
      const result = await messageServices.getAllMessageFromDB()
      sendResponse(res,{
            message:"Message retrived successfull",
            data:result,
            statusCode:status.OK
      })
})

export const messageControllers = {
  createMessage,
  getAllMessage
}
