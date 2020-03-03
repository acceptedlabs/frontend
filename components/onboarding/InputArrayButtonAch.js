import { useState } from 'react'
import Input from './Input'

function InputArrayButtonAch({ achievement, handleArrayChange }) {
	const [state, setState] = useState({
		inputOpen: false,
		achieve: '',
	})

	const openForm = () => {
		setState({
			...state,
			inputOpen: true,
		})
	}

	const closeForm = () => {
		setState({
			...state,
			inputOpen: false,
		})
	}

	const inputHandler = (e) => {
		setState({
			...state,
			achieve: e.target.value,
		})
	}

	const renderNewInput = () => {
		return (
			<div>
				<Input
					placeholder="Your achievement..."
					type="text"
					onChange={inputHandler}
					value={state.achieve}
					onBlur={closeForm}
				/>
				<button
					style={{
						width: '100%',
						padding: '8px 16px',
						borderRadius: '1.5rem',
						border: '1px solid black',
						fontSize: '15px',
						cursor: 'pointer',
						transition: '0.2s ease',
						margin: '10px 10px 10px 0',
						outline: 'none',
					}}
					onMouseDown={() => {
						handleArrayChange([...achievement, state.achieve])
						setState({
							...state,
							achieve: '',
						})
					}}
				>Add</button>
			</div>
		)
	}

	const renderAddInputButton = () => {
		return (
			<button
				style={{
					padding: '8px 16px',
					borderRadius: '1.5rem',
					border: '1px solid black',
					fontSize: '15px',
					cursor: 'pointer',
					transition: '0.2s ease',
					margin: '10px 10px 10px 0',
					outline: 'none',
					width: '300px',
				}}
				className="add-button"
				onClick={openForm}
			>Add</button>
		)
	}


	return (
		state.inputOpen ? renderNewInput() : renderAddInputButton()
	)
}

export default InputArrayButtonAch