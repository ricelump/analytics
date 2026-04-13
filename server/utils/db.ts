import process from 'node:process'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schemas'
import 'dotenv/config'

export const db = drizzle({ connection: { url: process.env.DB_FILE_NAME! }, schema })
