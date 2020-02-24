import { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../../store/actions'

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

export default connect(null, { login })(Login)