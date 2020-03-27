import { Component } from 'react'
import { signOut } from '../../../auth-client'

import Layout from '../../../components/layout'

class SignOut extends Component {
	componentDidMount() {
		signOut()
	}
	render() {
		return (
			<Layout title="Log In">
				<div className="w-screen h-screen flex items-center justify-center">
					<img src="/assets/accepted-logo-dark.svg" alt="accepted" className="h-6"/>
				</div>
			</Layout>
		)
	}
}

export default SignOut