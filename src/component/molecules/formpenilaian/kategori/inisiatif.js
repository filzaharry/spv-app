import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="46" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="46">1</label>

      <input type="radio" id="47" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="47">2</label>

      <input type="radio" id="48" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="48">3</label>

      <input type="radio" id="49" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="49">4</label>

      <input type="radio" id="50" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="50">5</label>
    </div>
  );
};

export default Keterampilan;
