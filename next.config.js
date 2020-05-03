require('dotenv').config()

module.exports = {
	env: {
		API_ROOT: process.env.API_ROOT,
		APP_URL: process.env.APP_URL,
	},
}