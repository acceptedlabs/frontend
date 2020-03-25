/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore } from 'redux-persist'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import rootReducer from './reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const makeStore = (preloadedState, { isServer, req = null }) => {
	let store
	const sagaMiddleware = createSagaMiddleware()

	if (!isServer) {
		// persist and rehydrate store on client
		const { persistReducer } = require('redux-persist')
		const storage = require('redux-persist/lib/storage').default
		const persistConfig = {
			key: 'root',
			storage,
			transforms: [],
			whitelist: [], // persist nothing yet
		}
		store = createStore(
			persistReducer(persistConfig, rootReducer),
			preloadedState,
			composeEnhancers(
				applyMiddleware(
					sagaMiddleware,
				),
			),
		)
		store.__PERSISTOR = persistStore(store)
	} else {
		// on the server, just go ahead with the preloaded state. no persistence here.
		store = createStore(
			rootReducer,
			preloadedState,
			composeEnhancers(
				applyMiddleware(
					sagaMiddleware,
				),
			),
		)
	}

	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}


export default makeStore