import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Server_Config } from '../config/server.config'
import AppError from '../errors/app.error'
import status from 'http-status'
import catchAsync from './catchAsync'
import { UserModel } from '../modules/user/user.schema'

type TUserRole = 'admin' | 'user'

const checkUserTokenIsValid = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization
    // checking if the token is missing
    if (!authToken || !authToken.startsWith('Bearer ')) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized!')
    }
    const token = authToken.split(' ')[1]
    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      Server_Config.JWT_SECRET as string
    ) as JwtPayload

    const { email, role, iat } = decoded

    // checking if the user is exist
    const user = await UserModel.findOne({ email })

    if (!user) {
      throw new AppError(status.NOT_FOUND, 'This user is not found !')
    }
    // checking if the user is already deleted

    const isDeleted = user?.isDeleted

    if (isDeleted) {
      throw new AppError(status.FORBIDDEN, 'This user is deleted !')
    }

    // checking if the user is blocked
    const userStatus = user?.isBlocked

    if (userStatus) {
      throw new AppError(status.FORBIDDEN, 'This user is blocked ! !')
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized ')
    }
    req.userInfo = { email, role, userId: user._id }
    next()
  })
}

export default checkUserTokenIsValid
