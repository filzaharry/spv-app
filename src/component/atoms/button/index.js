import React from 'react'
import './button.scss'

const Button = ({title, ...rest}) => {
    return <button className="btn btn-block button" {...rest} >{title}</button>
}

export default Button;