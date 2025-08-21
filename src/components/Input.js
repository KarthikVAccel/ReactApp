import React from "react";

const Input = (props) =>{
    return (
        <input type={props.inputFromProps}  onChange={props.functionPassed}>
            {props.text}
        </input>
    )
}

export default Input