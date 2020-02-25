import Link from 'next/link'

import Layout from '../../components/layout'

const Home = () => (
	<Layout title="Home">
		<nav className="navbar is-transparent" style={{ background: 'none' }}>
			<div className="navbar-brand">
				<Link href="/home">
					<a className="navbar-item">
						<img src="/assets/accepted-logo-dark.svg" width="112" />
					</a>
				</Link>


				<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className="navbar-start">
				<a className="navbar-item">
					hi
				</a>
			</div>
		</nav>
	</Layout>
)

export default Home