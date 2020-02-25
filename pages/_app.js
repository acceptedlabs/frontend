import App from 'next/app'

import { Provider } from 'react-redux'
import makeStore from '../store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { PersistGate } from 'redux-persist/integration/react'
import * as actions from '../store/actions'

import 'source-serif-pro/source-serif-pro.css'
import '../styles/bulma.min.css'
import '../styles/index.css'

class AcceptedApp extends App {
	componentDidMount() {
		// initialize auth on app load
		this.props.store.dispatch(actions.initializeAuth())
	}
	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Provider store={store}>
				<PersistGate persistor={store.__PERSISTOR}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		)
	}
}

export default withRedux(makeStore)(withReduxSaga(AcceptedApp))