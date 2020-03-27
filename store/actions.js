/**
 * Action creator to handle token and other information after a redirect.
 * Dispatching this will asynchronously initialize the Auth0 client
 * with the hashed information in the URL.
 *
 * @returns {{type: string}} The created action.
 */
export function authHandleCallback() {
	return {
		type: 'AUTH_HANDLE_CB',
	}
}

/**
 * NOTE: This action should only be dispatched by a saga.
 *
 * Action creator to pass Auth0 user object to store.
 *
 * @param user The user object to store.
 * @returns {{type: string, user: *}} The created action.
 */
export function authInfoLoaded(user) {
	return {
		type: 'AUTH_INFO_LOADED',
		user,
	}
}