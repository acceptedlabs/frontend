import { useState } from 'react'
import PropTypes from 'prop-types'

const GradYear = ({ onChange }) => {
	const [selected, _setSelected] = useState('')
	const setSelected = selected => {
		onChange(selected)
		_setSelected(selected)
	}

	return (
		<div className="mt-10 text-center">
			<h4 className="text-3xl font-medium">
				When do you intend to graduate from your current academic program?
			</h4>
			<h5 className="mt-2 text-sm text-gray-700">
				(i.e. high school or college)
			</h5>
			<div className="mt-10">
				<div className="max-w-sm mx-auto my-0">
					<div className="relative">
						<select
							className="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							onChange={e => setSelected(e.target.value)}
							value={selected}
						>
							<option>2020</option>
							<option>2021</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
						</select>
						<div
							className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

GradYear.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default GradYear