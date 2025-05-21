import { NextFunction, Request, Response, Router } from 'express'
import { projectControllers } from './project.controller'
import upload from '../../config/multer.config'
import checkSchemaValidation from '../../utils/checkSchemaValidation'
import { projectValidations } from './project.validation'
import auth from '../../utils/checkUserTokenIsValid'

const projectRoute = Router()

projectRoute.post(
  '/',
  auth(),
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)

    next()
  },
  checkSchemaValidation(projectValidations.createProjectValidation),
  projectControllers.createProject
)

projectRoute.get('/', projectControllers.getAllProject)
projectRoute.get('/:id', projectControllers.getSingleProject)
projectRoute.patch(
  '/:id',
  auth(),
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)

    next()
  },
  checkSchemaValidation(projectValidations.updateProjectValidation),
  projectControllers.updateProject
)
projectRoute.delete('/:id', auth(), projectControllers.deleteProject)


export default projectRoute
