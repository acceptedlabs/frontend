import PropTypes from 'prop-types'
import { useState } from 'react'
import classNames from 'classnames'

const FieldStudy = ({ onChange }) => {
	const [selected, _setSelected] = useState(null)
	const setSelected = selected => {
		onChange(selected)
		_setSelected(selected)
	}
	return (
		<div className="mt-10 text-center">
			<h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium max-w-sm md:max-w-none lg:max-w-none xl:max-w-none mx-auto my-0">
				What&apos;s the general field of academic study you want to go into?
			</h4>
			<div className="mt-10 mb-32">
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-20 gap-4 max-w-5xl mx-auto my-0">
					<div className="col-span-1">
						<div className={classNames('onboarding-card', { 'selected': selected === 'humanities' })}
							onClick={() => setSelected('humanities')}>
							<h5 className="font-medium text-xl">Humanities</h5>
							<p>Includes arts, history, languages/lit, law, philosophy, and theology.</p>
						</div>
						<div className={classNames('onboarding-card', { 'selected': selected === 'social-sci' })}
							onClick={() => setSelected('social-sci')}>
							<h5 className="font-medium text-xl">Social Sciences</h5>
							<p>Includes anthropology, archaeology, economics, human geography, political science,
								psychology, sociology, and social work.</p>
						</div>
						<div className={classNames('onboarding-card', { 'selected': selected === 'natural-sci' })}
							onClick={() => setSelected('natural-sci')}>
							<h5 className="font-medium text-xl">Natural Sciences</h5>
							<p>Includes pure bio, chemistry, earth science/space science, and physics.</p>
						</div>
					</div>
					<div className="col-span-1">
						<div className={classNames('onboarding-card', { 'selected': selected === 'formal-sci' })}
							onClick={() => setSelected('formal-sci')}>
							<h5 className="font-medium text-xl">Formal Sciences</h5>
							<p>Includes computer science, mathematics, and statistics.</p>
						</div>
						<div className={classNames('onboarding-card', { 'selected': selected === 'applied-sci' })}
							onClick={() => setSelected('applied-sci')}>
							<h5 className="font-medium text-xl">Applied Sciences</h5>
							<p>Includes business, non-CS engineering, and medicine/health.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

FieldStudy.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default FieldStudy