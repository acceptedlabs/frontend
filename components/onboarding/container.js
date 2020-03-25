import PropTypes from 'prop-types'
import classNames from 'classnames'
import LogoBar from '../logo-bar'
import Layout from '../layout'

const Container = ({ children, parts, curPart, header }) => {
	return (
		<Layout>
			<LogoBar />
			<div className="parts-container">
				{parts.map(
					(part, idx) => {
						return <h2 key={part} className={classNames('part', { 'is-active': idx === curPart }, { 'is-hidden-mobile': idx > 0 })}>{part}</h2>
					}
				)}
			</div>
			<section className="section has-text-centered">
				<h2 className="step-header">
					{header}
				</h2>
			</section>
			<div className="hero-abody has-text-centered" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
				{children}
			</div>
			<style jsx>{`
			.parts-container {
				max-width: 700px;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
			.part {
				font-size: 1.5rem;
				font-family: "Source Serif Pro";
				font-weight: 600;
				color: #757575;
			}
			.part.is-active {
				color: #2B3548;
			}
			.step-header {
				font-size: 3rem;
				font-family: "Source Serif Pro";
				font-weight: bold;
				color: #2B3548;
			}
		`}</style>
		</Layout>
	)
}

Container.propTypes = {
	children: PropTypes.any,
	parts: PropTypes.arrayOf(PropTypes.string),
}

export default Container