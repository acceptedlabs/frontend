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

export default Layout