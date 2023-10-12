const env = process.env

export const dbConfig  = {
    host: env.DB_HOST,
	user: env.DB_USER,
	password: env.DB_PASSWORD,
	port: env.DB_PORT ? parseInt(env.DB_PORT) : 3306,
	database: env.DB_NAME,
}