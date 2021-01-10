import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="36" name={props.name} value="1" onChange={props.onChange} />
      <label htmlFor="36">1</label>

      <input type="radio" id="37" name={props.name} value="2" onChange={props.onChange} />
      <label htmlFor="37">2</label>

      <input type="radio" id="38" name={props.name} value="3" onChange={props.onChange} />
      <label htmlFor="38">3</label>

      <input type="radio" id="39" name={props.name} value="4" onChange={props.onChange} />
      <label htmlFor="39">4</label>

      <input type="radio" id="40" name={props.name} value="5" onChange={props.onChange} />
      <label htmlFor="40">5</label>
    </div>
  );
};

export default Keterampilan;
