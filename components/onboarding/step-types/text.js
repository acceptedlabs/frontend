const Text = ({ question, placeholder, onChange, value, attribution }) => {
	return (
		<div>
			<h2 className="question-title">
				{question}
			</h2>
			<br />
			<input type="text" className="question-input" placeholder={placeholder} onChange={onChange} value={value} />
			{attribution ? <br /> : null}
			{attribution ? <br /> : null}
			{attribution ? <div>{attribution}</div> : null}
			<style jsx>{`
			.question-title {
				font-family: 'Source Serif Pro', serif;
				font-size: 2.5rem;
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
}

export default Text