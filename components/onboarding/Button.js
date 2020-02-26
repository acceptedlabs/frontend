import Layout from "../layout"

function Button({nextStep, prevStep,buttonName}) {

    return (
        <Layout>
            <button
                className="step-button"
                onClick={(buttonName === "nextStep") ? nextStep :  prevStep}
            >{buttonName}</button>

            <style jsx>
                {`
                    .step-button {
                        display: block;
                        padding: 8px 16px;
                        border-radius: 5px;
                        border: 1px solid black;
                        font-size: 15px;
                        cursor: pointer;
                        transition: 0.2s ease;
                        margin-right: 10px;
                        outline: none;
                    }   

                    .step-button:hover {
                        transform: scale(1.1, 1.1)
                    } 
                `}
            </style>
        </Layout>
    )
}

export default Button