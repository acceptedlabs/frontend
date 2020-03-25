import {useState} from 'react'
import classNames from 'classnames'

import Layout from '../../components/layout'

// step imports
import NameStep from '../../components/onboarding-steps/name'
import MentorMenteeStep from '../../components/onboarding-steps/mentor-mentee'
import FieldStudyStep from '../../components/onboarding-steps/field-study'
import IntendedMajorStep from '../../components/onboarding-steps/intended-major'
import GradYearStep from '../../components/onboarding-steps/grad-year'
import RaceStep from '../../components/onboarding-steps/race'
import GenderStep from '../../components/onboarding-steps/gender'
import FinaidStep from '../../components/onboarding-steps/finaid'
import SchoolTypesStep from '../../components/onboarding-steps/school-types'

export default () => {
    const [state, setState] = useState({
        curStep: 0,
        name: '',
        mentorMentee: null,
        fieldStudy: null,
        intendedMajor: null,
        gradYear: null,
        race: null,
        gender: null,
        finaid: null,
        schoolTypes: null
    })

    const incStep = num => setState(prev => ({...prev, curStep: state.curStep + num}))

    const setKey = key => {
        return newVal => setState(prev => ({...prev, [key]: newVal}))
    }

    const steps = [
        <NameStep onChange={setKey('name')} value={state.name}/>,
        <MentorMenteeStep onChange={setKey('mentorMentee')}/>,
        <FieldStudyStep onChange={setKey('fieldStudy')}/>,
        <IntendedMajorStep onChange={setKey('intendedMajor')}/>,
        <GradYearStep onChange={setKey('gradYear')}/>,
        <RaceStep onChange={setKey('race')}/>,
        <GenderStep onChange={setKey('gender')}/>,
        <FinaidStep onChange={setKey('finaid')}/>,
        <SchoolTypesStep onChange={setKey('schoolTypes')}/>,
    ]

    const partLabels = [1, 1, 2, 2, 3, 3, 3, 3, 4]

    return (
        <Layout title="Get Started">
            <div className="w-screen px-16 py-8 text-center">
                <img src="/assets/accepted-logo-dark.svg" alt="accepted" className="mx-auto my-0 h-8 self-center"/>
            </div>
            <div
                className="w-screen max-w-lg flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between mx-auto my-0 select-none">
                <h3 className={classNames('text-xl', 'font-medium', {'text-gray-800': partLabels[state.curStep] === 1}, {'text-gray-600': partLabels[state.curStep] !== 1})}>welcome</h3>
                <h3 className={classNames('text-xl', 'font-medium', {'text-gray-800': partLabels[state.curStep] === 2}, {'text-gray-600': partLabels[state.curStep] !== 2})}>academics</h3>
                <h3 className={classNames('text-xl', 'font-medium', {'text-gray-800': partLabels[state.curStep] === 3}, {'text-gray-600': partLabels[state.curStep] !== 3})}>demographics</h3>
                <h3 className={classNames('text-xl', 'font-medium', {'text-gray-800': partLabels[state.curStep] === 4}, {'text-gray-600': partLabels[state.curStep] !== 4})}>school
                    types</h3>
            </div>
            <div className="mt-8 font-bold text-5xl text-center">
                Let's get started.
            </div>
            {steps[state.curStep]}
            <div
                className="fixed bottom-0 w-screen px-16 py-8 text-center flex flex-row items-center justify-center select-none">
                <button
                    className={classNames('rounded-full', 'bg-blue-700', 'hover:bg-blue-900', 'px-4', 'py-2', 'text-white', {'hidden': state.curStep <= 0})}
                    onClick={() => incStep(-1)}
                >
                    &lsaquo; Back
                </button>
                &emsp;
                <button
                    className={classNames('rounded-full', 'bg-blue-700', 'hover:bg-blue-900', 'px-4', 'py-2', 'text-white', {'hidden': state.curStep >= steps.length - 1})}
                    onClick={() => incStep(1)}
                >
                    Next &rsaquo;
                </button>
            </div>
        </Layout>
    )
}