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
		if (this.props.isAuth && this.props.isOnboarded != null) {
			if (this.props.isOnboarded) {
				this.props.router.replace('/forum')
			} else {
				this.props.router.replace('/onboarding')
			}
		}
		return (
			<Layout title="Authenticated">
				<div className="w-screen h-screen flex items-center justify-center">
					<img src="/assets/accepted-logo-dark.svg" alt="accepted" className="h-6"/>
				</div>
			</Layout>
		)
	}
}

Done.propTypes = {
	authHandleCallback: PropTypes.func.isRequired,
	isAuth: PropTypes.bool.isRequired,
	isOnboarded: PropTypes.bool,
	router: PropTypes.object.isRequired,
}

export default connect(state => { return { isAuth: state.auth.isAuth, isOnboarded: state.auth.isOnboarded } }, {authHandleCallback})(withRouter(Done))