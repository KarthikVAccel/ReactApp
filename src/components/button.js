import React from "react";

const button = (props) =>{
    return (
        <button key={props.key} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default button