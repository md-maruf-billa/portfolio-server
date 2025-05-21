// cloudinary.js
import { v2 as cloudinary } from 'cloudinary'
import { Server_Config } from '../config/server.config'

cloudinary.config({
  cloud_name: Server_Config.cloud_name,
  api_key: Server_Config.cloud_api_key,
  api_secret: Server_Config.cloud_secret
})

export default cloudinary
