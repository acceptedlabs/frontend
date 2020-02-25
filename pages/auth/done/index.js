import { Component } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { processToken } from '../../../store/actions'

import Layout from '../../../components/layout'

class Done extends Component {
	static getInitialProps({ req }) {
		const url = (req && req.url) ? req.url : location.href
		return { urlSuffix: url }
	}
	componentDidMount() {
		this.props.processToken(this.props.urlSuffix)
	}
	render() {
		if (this.props.isAuth) this.props.router.push('/home')
		return (
			<Layout title="Authenticated">
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

Done.propTypes = {
	processToken: PropTypes.func.isRequired,
	urlSuffix: PropTypes.string.isRequired,
	isAuth: PropTypes.bool.isRequired,
	router: PropTypes.func.isRequired,
}

export default connect(
	state => { return { isAuth: state.auth.isAuth } },
	{ processToken },
)(withRouter(Done))