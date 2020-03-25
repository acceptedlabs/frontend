import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MentorMentee = ({ onChange }) => {
	const [selected, _setSelected] = useState(null)
	const setSelected = selected => {
		onChange(selected)
		_setSelected(selected)
	}
	return (
		<div className="mt-10 text-center">
			<h4 className="text-3xl font-medium">
                Are you a <span className="underline">mentor</span> or <span className="underline">mentee</span>?
			</h4>
			<div className="mt-10">
				<div className={classNames('onboarding-card', { 'selected': selected === 'mentor' })}
					onClick={() => setSelected('mentor')}>
					<h5 className="font-medium text-xl">Mentor</h5>
					<p>You&apos;re a college student who wants to help college applicants.</p>
				</div>
				<div className={classNames('onboarding-card', { 'selected': selected === 'mentee' })}
					onClick={() => setSelected('mentee')}>
					<h5 className="font-medium text-xl">Mentee</h5>
					<p>You&apos;re a high school student who&apos;s getting ready to apply to college.</p>
				</div>
			</div>
		</div>
	)
}

MentorMentee.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default MentorMentee