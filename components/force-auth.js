/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useAuth0 } from '../auth0-client'

import Loading from './loading'


export const withForceAuth = (Component, block, redirectLocation = '/') => {
	const hoc = props => {
		const router = useRouter()
		const { isAuthenticated, loading } = useAuth0()
		if (loading && block) return <Loading />
		if (!isAuthenticated) {
			router.replace(redirectLocation)
			if (block) return <Loading />
		}
		return <Component {...props} />
	}
	hoc.displayName = `withForceAuth(${Component.displayName || Component.name}`
	return hoc
}