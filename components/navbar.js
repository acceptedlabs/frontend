import PropTypes from 'prop-types'
import Link from 'next/link'

import { connect } from 'react-redux'

const Navbar = ({ auth, rightPanelHidden }) => (
	<div className="w-screen px-16 py-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-flow-col">
		<img src="/assets/accepted-logo-dark.svg" alt="accepted" className="h-8 col-span-1 self-center"/>
		{!rightPanelHidden ? <div className="col-span-1 sm:col-start-2 md:col-start-2 lg:col-start-4 text-right flex items-center justify-end">
			{!auth.isAuth ?
				<Link href="/auth"><button className="bg-blue-900 text-white rounded-full font-medium px-4 py-2 hover:bg-blue-700 select-none">Log in</button></Link> :
				<p className="text-md">Welcome, {auth.profile.given_name}!&emsp;<Link href="/auth/signout"><span className="text-blue-600 hover:text-black cursor-pointer">Sign out</span></Link></p>
			}
		</div>
			: null}
	</div>
)

Navbar.propTypes = {
	auth: PropTypes.object.isRequired,
	rightPanelHidden: PropTypes.bool,
}

export default connect(state => ({auth: state.auth}), null)(Navbar)