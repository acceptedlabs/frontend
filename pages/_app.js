import App from 'next/app'
import Router from 'next/router'

import { GraphQLProvider } from '../client/provider'
import { Auth0Provider } from '../auth0-client'

import '../styles/index.css'

const onRedirectCallback = appState => {
	Router.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: '/',
	)
}

const config = {
	domain: 'accepted.auth0.com',
	clientID: 'HPNf4xBJSrg5jkbdj3PHPdu1BCdCmUWC',
	redirectUri: 'http://localhost:3000/',
}

class AcceptedApp extends App {
	render() {
		const { Component, pageProps } = this.props
		
		return (
			<Auth0Provider
				domain={config.domain}
				client_id={config.clientID}
				redirect_uri={config.redirectUri}
				onRedirectCallback={onRedirectCallback}
			>
				<GraphQLProvider>
					<Component {...pageProps} />
				</GraphQLProvider>
			</Auth0Provider>
		)
	}
}

export default AcceptedApp