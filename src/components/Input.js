import React from "react";

const Input = (props) =>{
    return (
        <input checked={props.checked} type={props.inputTypeFromProps} value={props.text}  onChange={props.functionPassed}>
            
        </input>
    )
}

export default Input