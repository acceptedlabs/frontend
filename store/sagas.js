/* eslint-disable no-unused-vars */
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'

import { handleAuthentication } from '../auth-client'

export function* parseInfo() {
	const user = yield call(handleAuthentication)
	yield put(actions.authInfoLoaded(user))
}

export function* watchParseInfo() {
	yield takeLatest('AUTH_HANDLE_CB', parseInfo)
}

export default function* rootSaga() {
	yield all([
		watchParseInfo(),
	])
}