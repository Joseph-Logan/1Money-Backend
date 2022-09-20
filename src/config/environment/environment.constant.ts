import { join } from 'path'

export const ENV_FILE_PATH = join(process.cwd(), `.env.${process.env.NODE_ENV}`)
