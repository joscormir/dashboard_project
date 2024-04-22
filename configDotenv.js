import dotenv from 'dotenv'

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const configDotenv = result.parsed

export default configDotenv
