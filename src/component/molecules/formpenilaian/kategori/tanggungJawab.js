import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="11" name={props.name} value="1" onChange={props.onChange} />
      <label for="11">1</label>

      <input type="radio" id="12" name={props.name} value="2" onChange={props.onChange} />
      <label for="12">2</label>

      <input type="radio" id="13" name={props.name} value="3" onChange={props.onChange} />
      <label for="13">3</label>

      <input type="radio" id="14" name={props.name} value="4" onChange={props.onChange} />
      <label for="14">4</label>

      <input type="radio" id="15" name={props.name} value="5" onChange={props.onChange} />
      <label for="15">5</label>
    </div>
  );
};

export default Keterampilan;
