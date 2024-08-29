import React from 'react'

const Input = (props) => {
    return (
        <div>
                <label>{props.inputtext}</label>
                <input type={props.type}/>
        </div>
    )
}

export default Input
