import Layout from "../../components/layout"
import {useState} from "react"
import Name from "../../components/onboarding/Name"
import Intended from "../../components/onboarding/Intended"
import Achievement from "../../components/onboarding/Achievement"
import Activity from "../../components/onboarding/Activity"


function Onboarding() {
    const [state, setState] = useState({
        step: 1,
        firstName: "",
        lastName: "",
        gradyear: 0,
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
                    <Name nextStep={nextStep} handleChange={handleChange}/>
                )
            
            case 2:
                return (
                    <Intended prevStep={prevStep} nextStep={nextStep} handleChange={handleChange}/>
                )

            case 3: 
                return (
                    <Activity 
                        prevStep={prevStep} 
                        nextStep={nextStep} 
                        handleArrayChange = {handleArrayChange}
                        activities={state.extraAct}
                    />
                )

            case 4:
                return (
                    <Achievement prevStep={prevStep} nextStep={nextStep} handleChange={handleChange}/>
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