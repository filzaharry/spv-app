import React from 'react'

const Saran = (props) => {
    return (
        <div className="pb-4">
            <label for="saran">{props.saran}</label>
            <textarea type="text" class="form-control" onChange={props.onChange} />
        </div>
    )
}

export default Saran
