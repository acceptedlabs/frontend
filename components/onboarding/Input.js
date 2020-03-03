import Layout from '../layout'

function Input({ placeholder, onChange, type, value, onBlur, styles }) {
	return (
		<Layout>
			<input
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				value={value}
				autoFocus
				onBlur={onBlur}
				style={styles}
			/>

			<style jsx>
				{`
				input {
					display: block;
					padding: 15px 15px;
					outline: none;
					border: none;
					border-radius: 2rem;
					margin: 1rem 0rem;
					font-size: 18px;
					text-align: center;
					width: 300px;
				}
			`}
			</style>
		</Layout>
	)
}

export default Input