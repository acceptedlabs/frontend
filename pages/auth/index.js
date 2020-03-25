import { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { login } from '../../store/actions'

import Layout from '../../components/layout'

class Login extends Component {
	componentDidMount() {
		this.props.login()
	}
	render() {
		return (
			<Layout title="Log In">
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container has-text-centered">
							<button className="button is-large is-warning is-loading" style={{ background: 'none' }}>Loading</button>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
}

export default connect(null, { login })(Login)