/* eslint-disable no-unused-vars */
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'

import * as api from '../api-client'

const tokenSelector = state => state.auth.user.accessToken || null
const onboardedSelector = state => state.auth.isOnboarded

import { handleAuthentication } from '../auth-client'

export function* parseInfo() {
	const user = yield call(handleAuthentication)
	yield put(actions.authInfoLoaded(user))
	const token = yield select(tokenSelector)
	const isOnboarded = yield call(api.isOnboarded, token)
	yield put(actions.setOnboardingStatus(isOnboarded))
}

export function* watchParseInfo() {
	yield takeLatest('AUTH_HANDLE_CB', parseInfo)
}

export function* submitOnboardingData(action) {
	const token = yield select(tokenSelector)
	const isOnboarded = yield select(onboardedSelector)
	if (!isOnboarded && token) {
		const res = yield call(api.submitOnboardingData, token, action.data)
		if (res.status === 201) {
			yield put(actions.setOnboardingStatus(true))
		} else {
			console.log('something went wrong')
		}
	}
}

export function* watchSubmitOBData() {
	yield takeLatest('AUTH_SUBMIT_OB_DATA', submitOnboardingData)
}

export default function* rootSaga() {
	yield all([
		watchParseInfo(),
		watchSubmitOBData(),
	])
}