import Layout from "../layout"
import {useState} from "react"
import Input from "./Input"

function InputArrayButton ({activities,handleArrayChange}) {
    const [state, setState] = useState({
        inputOpen: false,
        activity: "",
    }) 

    const openForm = () => {
        setState({
            ...state,
            inputOpen: true
        })
    }

    const closeForm = () => {
        setState({
            ...state,
            inputOpen: false
        })
    }

    const inputHandler = (e) => {
        setState({
            ...state,
            activity: e.target.value
        })
    }

    const renderNewInput = () => {
        return (
            <div>
                <Input 
                    placeholder="Your activity..."
                    type="text"
                    onChange={inputHandler}
                    value = {state.activity}
                    onBlur = {closeForm}
                />
                <button 
                    style = {{
                        width: "100%",
                        padding: "8px 16px",
                        borderRadius: "1.5rem",
                        border: "1px solid black",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "0.2s ease",
                        margin: "10px 10px 10px 0",
                        outline: "none",
                     }}
                    onMouseDown={()=> {
                    handleArrayChange([...activities, state.activity])
                    setState({
                        ...state,
                        activity: ""
                    })
                    }}
                >Add</button>
            </div>
        )
    }

    const renderAddInputButton = () => {
        return (
            <button 
                style = {{
                    padding: "8px 16px",
                        borderRadius: "1.5rem",
                        border: "1px solid black",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "0.2s ease",
                        margin: "10px 10px 10px 0",
                        outline: "none",
                }}
                className="add-button"
                onClick={openForm}
            >Add</button>
        )
    }


    return (
        state.inputOpen ? renderNewInput() : renderAddInputButton()
    )
}

export default InputArrayButton