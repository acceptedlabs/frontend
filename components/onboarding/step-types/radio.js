const Radio = ({ question, onChange, choices, value, attribution }) => {
	return (
		<div className="container">
			<h2 className="question-title has-text-centered">
				{question}
			</h2>
			<br />
			{choices.map(choice => (
				<div key={choice.term} className="has-text-left question-choices" style={{ display: 'flex', alignItems: 'center'}}>
					<input
						type="radio"
						name="qtns"
						id={choice.term}
						value={choice.term}
						onChange={onChange}
						checked={value === choice.term}
						className="radio"
					/>
					&emsp;
					<label htmlFor="qtns">
						<strong>{choice.term}</strong>
						&nbsp;&mdash;&nbsp;
						{choice.def}
					</label>
				</div>
			))}
			{attribution ? <br /> : null}
			{attribution ? <br /> : null}
			{attribution ? <div>{attribution}</div> : null}
			<style jsx>{`
			.question-title {
				font-family: 'Source Serif Pro', serif;
				font-size: 2.5rem;
				color: #2B3548;
				font-weight: 600;
				max-width: min(900px, 90%);
				margin: 0 auto;
			}
			.question-choices {
				max-width: min(900px, 90%);
				margin: 0 auto;
				color: #2B3548;
				background: none;
				font-family: 'Source Serif Pro', serif;
				font-size: 1.6rem;
				margin-bottom: 1rem;
			}
			label, strong {
				color: #2B3548 !important;
			}
			label:before {
				background: red;
			}
		`}</style>
		</div>
	)
}

export default Radio