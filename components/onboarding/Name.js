import Layout from "../layout"

function Name({nextStep, handleChange}) {

    function onClick(e) {
        e.preventDefault()
        nextStep()
    }

    return(
        <Layout>
            <form>
                <input placeholder="What is your first name" onChange={handleChange("firstName")}/>
                <input placeholder="What is your last name"/>
                <button
                    onClick = {onClick}
                >Next</button>
            </form>
        </Layout>
    )
    
}   

export default Name