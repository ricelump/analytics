import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

// if (!process.env.TURSO_DATABASE_URL)
//   throw new Error('TURSO_DATABASE_URL env variable is required')
// if (!process.env.TURSO_AUTH_TOKEN)
//   throw new Error('TURSO_AUTH_TOKEN env variable is required')

export default defineConfig({
	out: './drizzle',
	schema: './server/database/schema.ts',
	// dialect: 'turso',
	// dbCredentials: {
	//   url: process.env.TURSO_DATABASE_URL,
	//   authToken: process.env.TURSO_AUTH_TOKEN,
	// },
	dialect: 'sqlite',
	dbCredentials: {
		url: 'file:sqlite.db',
	},
})
