import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="16" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="16">1</label>

      <input type="radio" id="17" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="17">2</label>

      <input type="radio" id="18" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="18">3</label>

      <input type="radio" id="19" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="19">4</label>

      <input type="radio" id="20" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="20">5</label>
    </div>
  );
};

export default Keterampilan;
