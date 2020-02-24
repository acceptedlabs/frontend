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
		const client = yield select(clientSelector)
		yield client.loginWithRedirect()
	} catch (err) {
		console.log('oops')
		// yield put(actions.authInitializationError(err))
	}
}

export function* watchLogin() {
	yield takeEvery('LOGIN', login)
}

// root saga which will run in a separate thread
export default function* rootSaga() {
	// this function will execute these things concurrently
	yield all([
		watchInitializeAuth(),
		watchLogin(),
	])
}