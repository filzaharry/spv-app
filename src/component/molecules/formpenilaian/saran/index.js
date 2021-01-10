import React from 'react'

const Saran = (props) => {
    return (
        <div className="pb-4">
            <label htmlFor="saran">{props.saran}</label>
            <textarea type="text" className="form-control" onChange={props.onChange} />
        </div>
    )
}

export default Saran
