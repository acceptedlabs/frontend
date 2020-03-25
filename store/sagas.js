/* eslint-disable no-unused-vars */
import { all, call, put, select, take, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

import createAuth0Client from '@auth0/auth0-spa-js'

const clientSelector = state => state.auth.client

const clientSettings = {
	domain: process.env.AUTH_DOMAIN,
	client_id: process.env.AUTH_CLIENT_ID,
	redirect_uri: process.env.AUTH_REDIRECT_URI,
}

export function* initializeAuth(action) {
	try {
		const auth0 = yield call(createAuth0Client, clientSettings)
		yield put(actions.authInitialized(auth0))
	} catch (err) {
		yield put(actions.authInitializationError(err))
	}
}

export function* watchInitializeAuth() {
	yield takeEvery('INITIALIZE_AUTH', initializeAuth)
}

export function* login(action) {
	try {
		var client = yield select(clientSelector)
		if (!client) {
			yield call(initializeAuth)
			client = yield select(clientSelector)
		}
		yield call(() => client.loginWithRedirect())
	} catch (err) {
		console.log(err)
		console.log('oops')
	}
}

export function* watchLogin() {
	yield takeEvery('LOGIN', login)
}

export function* processToken(action) {
	try {
		var client = yield select(clientSelector)
		if (!client) {
			yield call(initializeAuth)
			client = yield select(clientSelector)
		}
		yield call(url => client.handleRedirectCallback(url), `${clientSettings.redirect_uri}${action.suffix}`)
		yield put(actions.authFlowCompleted())
	} catch (err) {
		if (err.message.includes('Invalid state') || err.message.includes('no query')) {
			yield call(login)
		}
	}
}

export function* watchProcessToken() {
	yield takeEvery('PROCESS_TOKEN', processToken)
}


// root saga which will run in a separate thread
export default function* rootSaga() {
	// this function will execute these things concurrently
	yield all([
		watchInitializeAuth(),
		watchLogin(),
		watchProcessToken(),
	])
}