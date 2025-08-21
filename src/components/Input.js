import React from "react";

const Input = (props) =>{
    return (
        <input checked={props.checked} type={props.inputTypeFromProps}  onChange={props.functionPassed}>
            {props.text}
        </input>
    )
}

export default Input