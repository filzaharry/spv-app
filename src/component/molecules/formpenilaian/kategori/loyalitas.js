import React from "react";
import "./kategori.scss";

const Keterampilan = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="41" name={props.name} value="1" onChange={props.onChange} />
      <label for="41">1</label>

      <input type="radio" id="42" name={props.name} value="2" onChange={props.onChange} />
      <label for="42">2</label>

      <input type="radio" id="43" name={props.name} value="3" onChange={props.onChange} />
      <label for="43">3</label>

      <input type="radio" id="44" name={props.name} value="4" onChange={props.onChange} />
      <label for="44">4</label>

      <input type="radio" id="45" name={props.name} value="5" onChange={props.onChange} />
      <label for="45">5</label>
    </div>
  );
};

export default Keterampilan;
