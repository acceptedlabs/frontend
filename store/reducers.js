/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux'

const initialState = {
	auth: {
		isAuth: false,
		isOnboarded: null,
		user: null,
		profile: null,
	},
	post: {
		isSubmitted: false,
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

function onboardingInfoLoaded(authState, action) {
	return {
		...authState,
		isOnboarded: action.isOnboarded,
	}
}

const authReducer = createReducer(initialState.auth, {
	'AUTH_INFO_LOADED': authInfoLoaded,
	'AUTH_SET_OB_STATUS': onboardingInfoLoaded,
})

function postSetSubmitted(postState, action) {
	return {
		...postState,
		isSubmitted: action.submitted,
	}
}

const postReducer = createReducer(initialState.post, {
	'POST_SUB_STATUS': postSetSubmitted,
})

const acceptedApp = combineReducers({
	auth: authReducer,
	post: postReducer,
})

export default acceptedApp