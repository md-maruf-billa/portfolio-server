import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../utils/cloudinary'

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req, file) => 'abumahid/' + file.originalname
  }
})

const upload = multer({ storage: storage })

export default upload
