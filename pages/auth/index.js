import { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { login } from '../../store/actions'

class Login extends Component {
	componentDidMount() {
		this.props.login()
	}
	render() {
		return (
			<div></div>
		)
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
}

export default connect(null, { login })(Login)