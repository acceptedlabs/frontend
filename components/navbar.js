import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useAuth0 } from '../auth0-client'

const Navbar = ({ rightPanelHidden }) => {
	const { isAuthenticated, loading, user, logout, loginWithPopup } = useAuth0()

	console.log(`Loading: ${loading}, isAuth: ${isAuthenticated}, user: ${user}`)

	const rightPanel = <div className="col-span-1 sm:col-start-2 md:col-start-2 lg:col-start-4 text-right flex items-center justify-end">
		{loading ?
			<p className="py-2">Loading...</p> :
			(!isAuthenticated ?
				<button onClick={() => loginWithPopup()} className="bg-blue-900 text-white rounded-full font-medium px-4 py-2 hover:bg-blue-700 select-none">Log in</button> :
				<p className="text-md py-2">
					<span className="font-medium mr-3">{user.name}</span>
					<a
						className={classNames('text-blue-600', 'hover:text-black', 'cursor-pointer', { 'hidden': !user })}
						onClick={() => logout()}
					>Sign out</a>
				</p>
			)
		}
	</div>

	return (
		<div className="w-screen px-6 md:px-16 lg:px-16 xl:px-16 py-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-flow-col">
			<img src="/assets/accepted-logo-dark.svg" alt="accepted" className="h-8 col-span-1" />
			{rightPanelHidden ? null : rightPanel}
		</div>
	)
}

Navbar.propTypes = {
	rightPanelHidden: PropTypes.bool,
}

export default Navbar