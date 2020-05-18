import React from "react";

export default function Button(props) {
    const isOperator = val => !isNaN(val) || val === "." || val === "=";
    return(
        <div
            className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
            onClick={() => props.addToInput(props.children)}
        >
            {props.children}
        </div>
    )
}