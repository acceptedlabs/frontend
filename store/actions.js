
/**
 * Action creator to initialize auth.
 * Dispatching this will begin asynchronously initialize the Auth0
 * client (via a Saga).
 * @returns {object} The created action.
 */
export function initializeAuth() {
	return {
		type: 'INITIALIZE_AUTH',
	}
}