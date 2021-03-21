import React from 'react'
import Input from '../Input'
import './checkbox.scss'

const CheckBox = (props) => {

    return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <Input type="radio" onChange={props.onChange} label="1" id={props.id1} value={props.value1} htmlFor={props.htmlFor1}/> 
      <Input type="radio" onChange={props.onChange} label="2" id={props.id2} value={props.value2} htmlFor={props.htmlFor2}/> 
      <Input type="radio" onChange={props.onChange} label="3" id={props.id3} value={props.value3} htmlFor={props.htmlFor3}/> 
      <Input type="radio" onChange={props.onChange} label="4" id={props.id4} value={props.value4} htmlFor={props.htmlFor4}/> 
      <Input type="radio" onChange={props.onChange} label="5" id={props.id5} value={props.value5} htmlFor={props.htmlFor5}/> 
    </div>
    )
}

export default CheckBox
