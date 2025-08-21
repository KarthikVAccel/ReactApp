import React from "react";

const paragraph = (props) =>{
    return (
        <p onClick={props.onclick}>
            {props.text}
        </p>
    )
}

export default paragraph