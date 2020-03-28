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

/**
 * NOTE: This action should only be dispatched by a saga.
 *
 * Action creator to pass API-provided onboarding status to store.
 *
 * @param isOnboarded Whether or not the user has been onboarded.
 * @returns {{type: string, isOnboarded: boolean}} The created action.
 */
export function setOnboardingStatus(isOnboarded) {
	return {
		type: 'AUTH_SET_OB_STATUS',
		isOnboarded,
	}
}

/**
 * Action creator to trigger saga that submits onboarding data to the server.
 * @param data The data to submit.
 * @returns {{data: *, type: string}} The created action.
 */
export function submitOnboardingData(data) {
	return {
		type: 'AUTH_SUBMIT_OB_DATA',
		data,
	}
}