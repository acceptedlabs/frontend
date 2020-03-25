import PropTypes from 'prop-types'

const Name = ({ value, onChange }) => (
	<>
		<div className="mt-10 text-center">
			<h4 className="text-3xl font-medium">What&apos;s your first name?</h4>
			<div className="mt-4">
				<input type="text"
					className="mt-4 text-center text-gray-800 text-lg w-3/4 md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 py-1 border-b-2 border-gray-400 outline-none placeholder-gray-500 focus:border-gray-800"
					placeholder="e.g. John"
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
			</div>
		</div>
	</>
)

Name.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default Name