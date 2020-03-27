import { Component } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { authHandleCallback } from '../../../store/actions'

import Layout from '../../../components/layout'

class Done extends Component {
	componentDidMount() {
		this.props.authHandleCallback()
	}
	render() {
		if (this.props.isAuth) this.props.router.replace('/home')
		return (
			<Layout title="Authenticated">
				<div className="w-screen h-screen flex items-center justify-center">
					<h3 className="font-lg font-medium">Loading...</h3>
				</div>
			</Layout>
		)
	}
}

Done.propTypes = {
	authHandleCallback: PropTypes.func.isRequired,
	isAuth: PropTypes.bool.isRequired,
	router: PropTypes.object.isRequired,
}

export default connect(state => { return { isAuth: state.auth.isAuth } }, {authHandleCallback})(withRouter(Done))