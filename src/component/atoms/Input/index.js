import React, { Fragment } from 'react';
import './input.scss';

const Input = (props) => {
    return (
        <Fragment>
            <input type={props.type} id={props.id}  value={props.value} onChange={props.onChange} />
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </Fragment>
    )
}

export default Input
