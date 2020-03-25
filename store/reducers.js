/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux'

const initialState = {
	auth: {
		loading: false,
		error: null,
		isAuth: false,
		token: null,
		user: null,
		client: null,
	},
}

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}

function initializeAuth(authState, action) {
	return {
		...authState,
		loading: true,
	}
}

function authInitialized(authState, action) { 
	return {
		...authState,
		client: action.client,
		loading: false,
	}
}

function authInitializationError(authState, action) {
	return {
		...authState,
		loading: false,
		error: action.error,
	}
}

function authFlowCompleted(authState, action) {
	return {
		...authState,
		loading: false,
		isAuth: true,
	}
}

const authReducer = createReducer(initialState.auth, {
	'INITIALIZE_AUTH': initializeAuth,
	'AUTH_INITIALIZED': authInitialized,
	'AUTH_INITIALIZATION_ERROR': authInitializationError,
	'AUTH_FLOW_COMPLETED': authFlowCompleted,
})

const acceptedApp = combineReducers({
	auth: authReducer,
})

export default acceptedApp