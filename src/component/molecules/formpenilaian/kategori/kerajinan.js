import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="26" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="26">1</label>

      <input type="radio" id="27" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="27">2</label>

      <input type="radio" id="28" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="28">3</label>

      <input type="radio" id="29" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="29">4</label>

      <input type="radio" id="30" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="30">5</label>
    </div>
  );
};

export default Keterampilan;
