import Layout from "../../components/layout"
import {useState} from "react"

function Onboarding() {
    const [state, setState] = useState({
        step: 0,
        firstName: "",
        lastName: "",
        gradyear: 0,
        intendedMajor: "",
        extraAct: [],
        achievement: [],
        currentHighSchool: "",
        currentUniversity: "" //mentor only
    })

    return (
        <Layout>
            <div>

            </div>
        </Layout>
    )
}

export default Onboarding