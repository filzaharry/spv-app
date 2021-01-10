import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="31" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="31">1</label>

      <input type="radio" id="32" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="32">2</label>

      <input type="radio" id="33" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="33">3</label>

      <input type="radio" id="34" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="34">4</label>

      <input type="radio" id="35" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="35">5</label>
    </div>
  );
};

export default Keterampilan;
