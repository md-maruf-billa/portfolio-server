import { NextFunction, Request, Response, Router } from 'express'
import checkSchemaValidation from '../../utils/checkSchemaValidation'
import { blogValidations } from './blog.validation'
import { blogController } from './blog.controller'
import checkUserTokenIsValid from '../../utils/checkUserTokenIsValid'
import upload from '../../config/multer.config'
import auth from '../../utils/checkUserTokenIsValid'

const blogRouter = Router()

// create a new blog
blogRouter.post(
  '/',
  auth(),
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  checkSchemaValidation(blogValidations.createBlogValidationSchema),
  blogController.createABlog
)

// get all blogs
blogRouter.get('/', blogController.getAllBlogs)
blogRouter.get('/:id', blogController.getSingleBlog)

// update blog
blogRouter.patch(
  '/:id',
  auth(),
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  checkSchemaValidation(blogValidations.updateBlogValidationSchema),
  blogController.updateABlog
)

// delete a blog
blogRouter.delete(
  '/:id',
  auth(),
  blogController.deleteBlog
)

// export
export default blogRouter
