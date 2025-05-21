import 'dotenv/config'

export const Server_Config = {
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DB_URI,
  ENV_TYPE: process.env.ENV_TYPE,
  JWT_SECRET: process.env.JWT_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  cloud_api_key: process.env.CLOUD_API_KEY,
  cloud_secret: process.env.CLOUD_SECRET,
  sp_endpoint: process.env.SP_ENDPOINT
}
