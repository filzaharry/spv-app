import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="card pt-4" onClick={props.onClick}>
      <div className="img-card">
        <img src={props.icon} alt="card" height={60} width={50} />
      </div>
      <p className="pt-2">{props.text}</p>
    </div>
  );
};

export default Card;
