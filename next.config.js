require('dotenv').config()

module.exports = withSass({
	env: {
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
		AUTH_REDIRECT_URI: process.env.AUTH_REDIRECT_URI,
	},
})