import Layout from '../components/layout'

const Index = () => (
	<Layout>
		<div className="hero is-fullheight">
			<div className="hero-head">
				<section className="logo-box">
					<img src="assets/accepted-logo-dark.svg" />
				</section>
			</div>
			<div className="hero-body">
				<section className="section">
					<h1 className="header-text">
						Stressed about<br />college applications?<br />We can help.
					</h1>
					<p className="cta-description">Accepted pairs you up with real college students who can guide you through the entire process&mdash;from application to acceptance.</p>
					<div className="signup-cta">
						<button className="button is-rounded is-black is-aubergine">Get started - it's free</button>
					</div>
				</section>
			</div>
		</div>


		<style jsx>{`
			.logo-box {
				width: 100%;
				height: 4.8rem;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1.3rem 1rem;
			}
			.logo-box > img {
				height: 100%;
			}
			.hero-body > .section {
				margin: 0 auto;
				max-width: 70%;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.header-text {
				font-family: 'Source Serif Pro';
				font-weight: 900;
				color: #2B3548;
				font-size: 5rem;
				text-align: center;
				line-height: 5.5rem;
			}
			.cta-description {
				font-family: 'Red Hat Display';
				font-size: 1.5rem;
				text-align: center;
				margin-top: 20px;
				max-width: 80%;
			}
			button.is-aubergine {
				background: #3F3D56;
				font-family: 'Red Hat Display';
				font-weight: 500;
				font-size: 1rem;
				
			}
			.signup-cta {
				margin-top: 20px;
			}
		`}</style>
	</Layout>
)

export default Index