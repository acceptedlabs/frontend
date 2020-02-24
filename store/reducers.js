import { combineReducers } from 'redux'

const initialState = {
	auth: {
		loading: false,
		error: null,
		isAuth: false,
		token: null,
		user: null,
		client: null,
	}
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

function initializeAuth(initialState, action) {
	return {
		...initialState,
		loading: true,
	}
}

const authReducer = createReducer(initialState.auth, {
	'INITIALIZE_AUTH': initializeAuth,
})

const acceptedApp = combineReducers({
	auth: authReducer,
})

export default acceptedApp