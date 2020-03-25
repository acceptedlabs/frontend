import PropTypes from 'prop-types'

const Step = ({ question, placeholder }) => (
	<div>
		<h2 className="question-title">
			{question}
		</h2>
		<br />
		<input type="text" className="question-input" placeholder={placeholder} />
		<style jsx>{`
			.question-title {
				font-family: 'Source Serif Pro', serif;
				font-size: 2rem;
				color: #2B3548;
				font-weight: 600;
			}
			.question-input {
				width: 15rem;
				height: 2rem;
				color: #3F3D56;
				background: none;
				border: none;
				border-bottom: 3px solid #2B3548;
				outline: none;
				font-family: 'Red Hat Display', sans-serif;
				font-size: 1.1rem;
			}
			.question-input:active, .question-input:focus {
				border-bottom: 3px solid #488277;
			}
			.question-input::placeholder {
				color: #757575;
				text-align: center;
			}
		`}</style>
	</div>
)

Step.propTypes = {
	question: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
}

export default Step