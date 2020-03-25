// assume this function exists
const sendDataToServer = (data, type) => {
	// do something
}

// BEFORE abstraction

const signIn = () => (
	<div className="form-container">
		<div className="form-title">
			Sign In To MyApp
		</div>
		<br />
		<input type="email" />
		<input type="password" />
		<button className="button submit-button" onClick={() => sendDataToServer(some_data, SIGN_IN)}>Log in</button>
	</div>
)



const signUp = () => (
	<div className="form-container">
		<div className="form-title">
			Sign Up for MyApp
	</div>
		<br />
		<input type="text" placeholder="Name" />
		<input type="email" />
		<input type="password" />
		<button className="button submit-button" onClick={() => sendDataToServer(some_data, SIGN_UP)}>Sign up</button>
	</div>
)


// AFTER abstraction

const FormLayout = ({ title, actionName, onSubmit, children }) => (
	<div className="form-container">
		<div className="form-title">
			{title}
		</div>
		<br />
		{children}
		<button className="button submit-button" onClick={onSubmit}>{actionName}</button>
	</div>
)

// notice how we also specified PropTypes. this will throw an error if we're passing props of the wrong type
// to this component.
FormLayout.propTypes = {
	title: PropTypes.string.isRequired,
	actionName: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.any,
}


const signIn = () => (
	<FormLayout title="Sign In To MyApp" actionName="Sign in" onSubmit={() => sendDataToServer(some_data, SIGN_IN)}>
		<input type="email" />
		<input type="password" />
	</FormLayout>
)


const signUp = () => (
	<FormLayout title="Sign Up For MyApp" actionName="Sign up" onSubmit={() => sendDataToServer(some_data, SIGN_IN)}>
		<input type="email" />
		<input type="password" />
	</FormLayout>
)

// then, this makes it easy to do things like: 
const forgotPassword = () => (
	<FormLayout title="Forgot password" actionName="Send recovery email" onSubmit={() => sendDataToServer(some_data, SIGN_IN)}>
		<input type="email" />
	</FormLayout>
)
