import Link from 'next/link'

import Layout from '../../components/layout'

const Home = () => (
	<Layout title="Home">
		<br />
		<div className="has-text-centered">
			<img src="/assets/accepted-logo-dark.svg" width="112" />
		</div>
		<div className="has-text-centered nav-links">
			<p className="nav-link"><a href="#">forum</a></p>
			<p className="nav-link"><a href="#">chat</a></p>
			<p className="nav-link"><a href="#">profile</a></p>
			<p className="nav-link"><a href="#">logout</a></p>
		</div>
		<div className="hero is-small">
			<div className="hero-body">
				<section className="section">
					<h1 className="title is-1 has-text-centered">Good afternoon, Aditya.</h1>
					<h2 className="subtitle is-4 has-text-centered">Let&apos;s do something awesome today.</h2>
				</section>
			</div>
		</div>
		<section className="section">
			<div className="container has-text-centered">
				<h3 className="title is-4">Updates From Accepted</h3>
				<div className="updates">
					<div className="update">
						<div className="columns">
							<div className="column is-2">Mar 1</div>
							<div className="column is-1 is-hidden-desktop is-hidden-mobile"></div>
							<div className="column has-text-left">This is a test headline.</div>
						</div>
					</div>
					<div className="update">
						<div className="columns">
							<div className="column is-2">Feb 1</div>
							<div className="column is-1 is-hidden-desktop is-hidden-mobile"></div>
							<div className="column has-text-left">This is a test headline which is gonna be very very long. I am going to keep writing till it overflows.</div>
						</div>
					</div>
					<div className="update">
						<div className="columns">
							<div className="column is-2">Jan 1</div>
							<div className="column is-1 is-hidden-desktop is-hidden-mobile"></div>
							<div className="column has-text-left">This is a test headline which is gonna be moderately long. We will observe.</div>
						</div>
					</div>
				</div>
				<br />
				<a className="button is-rounded is-small is-black is-aubergine" href="//eepurl.com/gUKxm5">Sign up for the Accepted newsletter</a>
			</div>
		</section>

		<style jsx>{`
			.nav-links > p.nav-link {
				display: inline-block;
				width: 5rem;
				text-align: center;
			}
			.nav-links > p > a {
				color: #16302B;
				font-family: 'Source Serif Pro';
				font-weight: 600;
				transition: color 1s;
			}
			.nav-links > p > a:hover {
				text-decoration: underline;
				color: black;
			}
			h1, h2, h3 {
				font-family: 'Source Serif Pro';
				color: #16302B;
			}
			.title.is-1 {
				font-weight: 900;
			}
			.updates {
				display: flex;
				flex-direction: column;
				max-width: 50%;
				margin: 0 auto;
				align-items: center;
				justify-content: center;
				font-family: 'Source Serif Pro';
			}
			.updates > .update {
				width: 100%;
				padding: 10px;
			}
			.update > .columns > .column.is-2 {
				font-weight: 600;
			}
			.is-aubergine {
				background: #3F3D56;
				font-family: 'Red Hat Display';
				font-weight: 500;
				font-size: .8rem;
			}
			@media screen and (max-width: 768px) {
				.updates {
					max-width: 100%;
				}
			}
		`}</style>
	</Layout>
)

export default Home