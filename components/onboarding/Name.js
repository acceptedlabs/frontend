import Layout from '../layout'
import Button from './Button'
import Input from './Input'

function Name({ state, nextStep, handleChange }) {

	return (
		<Layout>
			<div className="form-container">
				<h1>First things first <br /> Your name ?</h1>
				<br />
				<form>
					<Input
						placeholder="What is your first name"
						onChange={handleChange('firstName')}
						value={state.firstName}
						type="text"
					/>
					<Input
						placeholder="What is your last name"
						onChange={handleChange('lastName')}
						value={state.lastName}
						type="text"
					/>
					{(state.firstName && state.lastName) ? <div className="step-button-group">
						<Button nextStep={nextStep} buttonName="nextStep" />
					</div> : null}

				</form>
			</div>

			<style jsx>
				{`
					.form-container {
						height: 100vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}

					.form-container h1 {
						font-family: 'Source Serif Pro';
						font-weight: 900;
						color: #2B3548;
						font-size: 3.5rem;
						text-align: center;
						line-height: 5.5rem;
					}

					form .step-button-group {
						display: flex;
						justify-content: flex-end;
					}
				`}
			</style>
		</Layout>
	)

}

export default Name