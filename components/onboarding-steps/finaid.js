import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Finaid = ({ onChange }) => {
	const [selected, _setSelected] = useState(null)
	const setSelected = selected => {
		onChange(selected)
		_setSelected(selected)
	}
	return (
		<div className="mt-10 text-center">
			<h4 className="text-3xl font-medium">
				Do you intend to apply for financial aid?
			</h4>
			<div className="mt-10 mb-32">
				<div className={classNames('onboarding-card', { 'selected': selected === 'yes' })}
					onClick={() => setSelected('yes')}>
					<h5 className="font-medium text-xl">Yes</h5>
					<p>I intend to file the FAFSA and apply for need-based financial aid.</p>
				</div>
				<div className={classNames('onboarding-card', { 'selected': selected === 'no' })}
					onClick={() => setSelected('no')}>
					<h5 className="font-medium text-xl">No</h5>
					<p>I do not intend to file the FAFSA and/or apply for need-based financial aid.</p>
				</div>
			</div>
		</div>
	)
}

Finaid.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default Finaid