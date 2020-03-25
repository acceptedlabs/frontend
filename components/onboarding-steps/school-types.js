import { useState } from 'react'
import classNames from 'classnames'

export default ({ onChange }) => {
    const [selected, _setSelected] = useState({
        stateFlagships: false,
        otherState: false,
        ivy: false,
        otherPrivate: false,
    })
    const toggleSelected = sel => {
        var curSelected = {...selected}
        curSelected[sel] = !curSelected[sel]
        onChange(curSelected)
        _setSelected(curSelected)
    }
    return (
        <div className="mt-10 text-center">
            <h4 className="text-3xl font-medium">
                What types of schools do you plan to apply to?
            </h4>
            <h5 className="mt-2 text-sm text-gray-700">
                You may select multiple options.
            </h5>
            <div className="mt-10 mb-32">
                <div className={classNames('onboarding-card', {'selected': selected['stateFlagships']})}
                     onClick={() => toggleSelected('stateFlagships')}>
                    <h5 className="font-medium text-xl">State flagships</h5>
                    <p>These include UT Austin, UC Berkeley, and similar schools.</p>
                </div>
                <div className={classNames('onboarding-card', {'selected': selected['otherState']})}
                     onClick={() => toggleSelected('otherState')}>
                    <h5 className="font-medium text-xl">Other state schools</h5>
                    <p>These include non-flagship state schools.</p>
                </div>
                <div className={classNames('onboarding-card', {'selected': selected['ivy']})}
                     onClick={() => toggleSelected('ivy')}>
                    <h5 className="font-medium text-xl">Ivy League</h5>
                    <p>These include schools that are part of the Ivy League.</p>
                </div>
                <div className={classNames('onboarding-card', {'selected': selected['otherPrivate']})}
                     onClick={() => toggleSelected('otherPrivate')}>
                    <h5 className="font-medium text-xl">Other private schools</h5>
                    <p>These include Stanford, Caltech, MIT, and similar schools.</p>
                </div>
            </div>
        </div>
    )
}