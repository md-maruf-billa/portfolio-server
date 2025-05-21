import { NextFunction, Request, Response, Router } from 'express'
import { projectControllers } from './project.controller'
import upload from '../../config/multer.config'
import checkSchemaValidation from '../../utils/checkSchemaValidation'
import { projectValidations } from './project.validation'

const projectRoute = Router()

projectRoute.post(
  '/create-project',
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)

    next()
  },
  checkSchemaValidation(projectValidations.createProjectValidation),
  projectControllers.createProject
)

projectRoute.get('/all-project', projectControllers.getAllProject)
projectRoute.get('/:id', projectControllers.getSingleProject)
projectRoute.patch(
  '/:id',
  checkSchemaValidation(projectValidations.updateProjectValidation),
  projectControllers.updateProject
)
projectRoute.delete('/:id', projectControllers.deleteProject)


export default projectRoute
