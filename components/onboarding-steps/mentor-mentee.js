import {useState} from 'react'
import classNames from 'classnames'

export default ({onChange}) => {
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
                <div className={classNames('onboarding-card', {'selected': selected === 'mentor'})}
                     onClick={() => setSelected('mentor')}>
                    <h5 className="font-medium text-xl">Mentor</h5>
                    <p>You're a college student who wants to help college applicants.</p>
                </div>
                <div className={classNames('onboarding-card', {'selected': selected === 'mentee'})}
                    onClick={() => setSelected('mentee')}>
                    <h5 className="font-medium text-xl">Mentee</h5>
                    <p>You're a high school student who's getting ready to apply to college.</p>
                </div>
            </div>
        </div>
    )
}