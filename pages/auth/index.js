import { Component } from 'react'
import PropTypes from 'prop-types'

import { signIn } from '../../auth-client'

import Layout from '../../components/layout'

class Login extends Component {
	componentDidMount() {
		signIn()
	}
	render() {
		return (
			<Layout title="Log In">
				<div className="w-screen h-screen flex items-center justify-center">
					<h3 className="font-lg font-medium">Loading...</h3>
				</div>
			</Layout>
		)
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
}

export default Login