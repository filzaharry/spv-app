import React from 'react'
import { LoginBg } from '../../../assets'
import './jumbotron.scss'

const Jumbotron = (props) => {
    return (
        <div className="jumbotron hero">
        <div className="row">
        <div className="col text-light">
            <h5 className="jumbo-text">{props.jumbotronTitle}</h5>
        </div>
        <div className="col">
            <img src={LoginBg} alt="header-img" height={100} width={140} />
        </div>
        </div>
    </div>
    )
}

export default Jumbotron
