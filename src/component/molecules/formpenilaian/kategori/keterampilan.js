import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="6" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="6">1</label>

      <input type="radio" id="7" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="7">2</label>

      <input type="radio" id="8" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="8">3</label>

      <input type="radio" id="9" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="9">4</label>

      <input type="radio" id="10" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="10">5</label>
    </div>
  );
};

export default Keterampilan;
