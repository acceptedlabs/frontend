
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

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to pass Auth0 client object to store.
 * @returns {object} The created action.
 */
export function authInitialized(client) {
	return {
		type: 'AUTH_INITIALIZED',
		client,
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 * 
 * Action creator to signify an error when creating auth client.
 * @returns {object} The created action.
 */
export function authInitializationError(error) {
	return {
		type: 'AUTH_INITIALIZATION_ERROR',
		error,
	}
}