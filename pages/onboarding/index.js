import Layout from "../../components/layout"
import {useState} from "react"
import Name from "../../components/onboarding/Name"
import Intended from "../../components/onboarding/Intended"
import Achievement from "../../components/onboarding/Achievement"
import Activity from "../../components/onboarding/Activity"
import CurrentSchool from "../../components/onboarding/CurrentSchool"


function Onboarding() {
    const [state, setState] = useState({
        step: 1,
        firstName: "",
        lastName: "",
        gradyear: new Number(),
        intendedMajor: "",
        extraAct: [],
        achievement: [],
        currentHighSchool: "",
        currentUniversity: "" //mentor only
    })

    const handleChange = input => e => {
        setState({
            ...state,
            [input] : e.target.value
        })
    }

    const handleArrayChange = data => {
        setState({
            ...state,
            extraAct: data
        })
    }

    const handleArrayChangeAch = data => {
        setState({
            ...state,
            achievement: data
        })
    }

    const nextStep = (e) =>{
        e.preventDefault()
        let {step} = state
        step +=1

        setState({
            ...state,
            step
        })
    }

    const prevStep = (e) => {
        e.preventDefault()
        let {step} = state
        step -=1

        setState({
            ...state,
            step: step
        })
    }

    const display = () => {
        switch(state.step) {
            case 1:
                return (
                    <Name state = {state} nextStep={nextStep} handleChange={handleChange}/>
                )
            
            case 2:
                return (
                    <Intended state = {state} prevStep={prevStep} nextStep={nextStep} handleChange={handleChange}/>
                )

            case 3: 
                return (
                    <Activity 
                        state ={state}
                        prevStep={prevStep} 
                        nextStep={nextStep} 
                        handleArrayChange = {handleArrayChange}
                        activities={state.extraAct}
                    />
                )

            case 4:
                return (
                    <Achievement 
                        state = {state}
                        prevStep={prevStep} 
                        nextStep={nextStep} 
                        handleArrayChange = {handleArrayChangeAch}
                        achievement={state.achievement}
                    />
                )

            case 5: 
                return (
                    <CurrentSchool 
                        state = {state} nextStep={nextStep} handleChange={handleChange}
                    />
                )
        }
    }


    return (
        <Layout>
            <div className="onboarding">
                {display()}
            </div>
        </Layout>
    )
}

export default Onboarding