import Layout from "../../components/layout"
import {useState} from "react"
import Name from "../../components/onboarding/Name"
import Intended from "../../components/onboarding/Intended"
import Achievement from "../../components/onboarding/Achievement"


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

    const nextStep = () =>{
        let {step} = state
        step +=1

        setState({
            ...state,
            step
        })
    }

    const prevStep = () => {
        let {step} = state
        step +=1

        setState({
            ...state,
            step: step-1
        })
    }

    function display() {
        switch(state.step) {
            case 1:
                return (
                    <Name nextStep={nextStep} handleChange={handleChange}/>
                )
            
            case 2:
                return (
                    <Intended nextStep={nextStep} handleChange={handleChange}/>
                )

            case 3: 
                return (
                    <Intended />
                )

            case 4:
                return (
                    <Achievement />
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