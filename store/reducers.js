/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux'

const initialState = {
	auth: {
		isAuth: false,
		user: null,
		profile: null,
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

function authInfoLoaded(authState, action) {
	return {
		...authState,
		isAuth: true,
		profile: action.user.profile,
		user: action.user,
	}
}

const authReducer = createReducer(initialState.auth, {
	'AUTH_INFO_LOADED': authInfoLoaded,
})

const acceptedApp = combineReducers({
	auth: authReducer,
})

export default acceptedApp