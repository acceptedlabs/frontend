import PropTypes from 'prop-types'

const LogoBar = () => (
	<section className="section logo-box">
		<img src="/assets/accepted-logo-dark.svg" />
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
		`}</style>
	</section>
)

LogoBar.propTypes = {
	isSmall: PropTypes.bool,
}

export default LogoBar