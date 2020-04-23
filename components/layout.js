import PropTypes from 'prop-types'
import Head from 'next/head'

const Layout = props => (
	<>
		<Head>
			<title key="title">{props.title ? `Accepted: ${props.title}` : 'Accepted'}</title>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="icon" type="image/png" href="/favicon.png" />
		</Head>
		{props.children}
	</>
)

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
}

export default Layout