import axios from 'axios'

const client = axios.create({
	baseURL: process.env.API_ROOT,
	timeout: 10000,
})

/**
 * Checks if a user is onboarded.
 * @param token The access token for the Accepted API.
 * @returns {boolean} The API response.
 */
export async function isOnboarded(token) {
	const res = await client.get('/user/isOnboarded', {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	})
	return res.data
}

/**
 * Submits onboarding data to the server.
 * @param token The access token for the Accepted API.
 * @param onboardingData Data to be submitted to the server.
 * @returns {Promise<void>} The API response.
 */
export async function submitOnboardingData(token, onboardingData) {
	return client.post('/user/onboard', onboardingData, {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	})
}