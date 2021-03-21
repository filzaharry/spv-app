import React, { Fragment } from 'react'

const Saran = (props) => {
    return (
        <Fragment>
        <div className="pb-4">
            <label htmlFor="saran">{props.saranQ1}</label>
            <textarea type="text" className="form-control" onChange={props.onChangeQ1} value={props.valueQ1} />
        </div>
        <div className="pb-4">
            <label htmlFor="saran">{props.saranQ2}</label>
            <textarea type="text" className="form-control" onChange={props.onChangeQ2} value={props.valueQ2} />
        </div>
        <div className="pb-4">
            <label htmlFor="saran">{props.saranQ3}</label>
            <textarea type="text" className="form-control" onChange={props.onChangeQ3} value={props.valueQ3} />
        </div>
        <div className="pb-4">
            <label htmlFor="saran">{props.saranQ4}</label>
            <textarea type="text" className="form-control" onChange={props.onChangeQ4} value={props.valueQ4} />
        </div>
        <div className="pb-4">
            <label htmlFor="saran">{props.saranQ5}</label>
            <textarea type="text" className="form-control" onChange={props.onChangeQ5} value={props.valueQ5} />
        </div>
        </Fragment>
    )
}

export default Saran
