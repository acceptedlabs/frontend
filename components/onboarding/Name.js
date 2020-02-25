import Layout from "../layout"

function Name({nextStep, handleChange}) {

    function onClick(e) {
        e.preventDefault()
        nextStep()
    }

    return(
        <Layout>
            <div className="form-container">
                <h1>First things first <br/> Your name ?</h1>
                <br/>
                <form>
                    <input placeholder="What is your first name" onChange={handleChange("firstName")}/>
                    <input placeholder="What is your last name" onChange={handleChange("lastName")}/>
                    <button
                        onClick = {onClick}
                    >Next</button>
                </form>
            </div>

            <style jsx>
                {`
                    .form-container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .form-container h1 {
                        font-family: 'Source Serif Pro';
                        font-weight: 900;
                        color: #2B3548;
                        font-size: 3.5rem;
                        text-align: center;
                        line-height: 5.5rem;
                    }

                    form {
                        position: relative;
                    }

                    form input {
                        display: block;
                        padding: 15px 15px;
                        outline: none;
                        border: none;
                        border-radius: 2rem;
                        margin: 1rem 0rem;
                        font-size: 18px;
                    }

                    form button {
                        display: block;
                        position: absolute;
                        right: 0;
                        padding: 8px 16px;
                        border-radius: 5px;
                        border: 1px solid black;
                        font-size: 15px;
                        cursor: pointer;
                        transition: 0.2s ease;
                    }

                    form button:hover {
                        transform: scale(1.1, 1.1)
                    }
                `}
            </style>
        </Layout>
    )
    
}   

export default Name