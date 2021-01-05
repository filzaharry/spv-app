import React from "react";
import "./kategori.scss";

const HasilKerja = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="1" name={props.name} value="1" onChange={props.onChange} />
      <label for="1">1</label>

      <input type="radio" id="2" name={props.name} value="2" onChange={props.onChange} />
      <label for="2">2</label>

      <input type="radio" id="3" name={props.name} value="3" onChange={props.onChange} />
      <label for="3">3</label>

      <input type="radio" id="4" name={props.name} value="4" onChange={props.onChange} />
      <label for="4">4</label>

      <input type="radio" id="5" name={props.name} value="5" onChange={props.onChange} />
      <label for="5">5</label>
    </div>
  );
};

export default HasilKerja;
