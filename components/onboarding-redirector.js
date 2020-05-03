import PropTypes from 'prop-types'

import { IS_ONBOARDED } from '../client/queries'
import { useQuery } from '@apollo/react-hooks'
import { useAuth0 } from '../auth0-client'
import { useRouter } from 'next/router'

import Loading from './loading'

const OnboardingRedirector = ({ block, children }) => {
	const router = useRouter()
	const { isAuthenticated, loading: loadingAuth, loginWithRedirect } = useAuth0()
	const { data, error, loading } = useQuery(IS_ONBOARDED)

	console.log(`isAuth: ${isAuthenticated}, loadingAuth: ${loadingAuth}`)
	console.log(`data: ${JSON.stringify(data)}, error: ${JSON.stringify(error)}, loading: ${loading}`)

	if (loading || loadingAuth) return <Loading />
	if (!isAuthenticated || error) {
		loginWithRedirect({ appState: { targetUrl: '/onboarding' } })
		if (block) return <Loading />
	}
	if (data && isAuthenticated && !data.isOnboarded && router.pathname !== '/onboarding') {
		router.replace('/onboarding')
	}
	if (data && data.isOnboarded && router.pathname !== '/forum') {
		router.replace('/forum')
		if (block) return <Loading />
	}

	return (
		<>
			{children}
		</>
	)
}

OnboardingRedirector.propTypes = {
	block: PropTypes.bool,
	children: PropTypes.node.isRequired,
}

export const withOnboardingRedirector = (Component, block) => {
	const hoc = props => (
		<OnboardingRedirector block={block}>
			<Component {...props} />
		</OnboardingRedirector>
	)
	hoc.displayName = `withOnboardingRedirector(${Component.displayName || Component.name}`
	return hoc
}

export default OnboardingRedirector