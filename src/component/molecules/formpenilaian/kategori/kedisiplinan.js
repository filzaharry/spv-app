import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="21" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="21">1</label>

      <input type="radio" id="22" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="22">2</label>

      <input type="radio" id="23" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="23">3</label>

      <input type="radio" id="24" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="24">4</label>

      <input type="radio" id="25" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="25">5</label>
    </div>
  );
};

export default Keterampilan;
