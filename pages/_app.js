import { Provider } from 'react-redux'
import makeStore from '../store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { PersistGate } from 'redux-persist/integration/react'

import 'source-serif-pro/source-serif-pro.css'
import '../styles/bulma.min.css'
import '../styles/index.css'

const AcceptedApp = ({ Component, pageProps, store }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={store.__PERSISTOR}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}

export default withRedux(makeStore)(withReduxSaga(AcceptedApp))