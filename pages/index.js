import Layout from '../components/layout'

const Index = () => (
	<Layout>
		<section className="logo-box">
			<img src="assets/accepted-logo-dark.svg" />
		</section>
		<style jsx>{`
			.logo-box {
				width: 100%;
				height: 4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1rem;
			}
			.logo-box > img {
				height: 100%;
			}
		`}</style>
	</Layout>
)

export default Index