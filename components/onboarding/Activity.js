import {useState} from "react"
import Layout from "../layout"
import Button from "./Button"
import Input from "./Input"
import InputArrayButton from "./InputArrayButton"

function Activity({prevStep, nextStep, handleArrayChange, activities}) {

    return (
        <Layout>
            <div className="form-container">
                <h1>Now your activities...</h1>
                <br/>
                <form>
                    <div className="add-able-field">
                        {activities.map(item => <input placeholder={item}/>)}
                        <InputArrayButton activities={activities} handleArrayChange={handleArrayChange}/>
                    </div>
                    <div className="step-button-group">
                        <Button prevStep={prevStep} buttonName="prevStep" />
                        <Button nextStep={nextStep} buttonName="nextStep" />
                    </div>
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

                    form .step-button-group {
                        display: flex;
                        justify-content: flex-end;
                    }

                    form .add-able-field {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </Layout>
    )
}

export default Activity