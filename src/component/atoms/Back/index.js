import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Back = (props) => {
  return (
    <div className="row">
      <div className="col text-left">
        <h5
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={props.onClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />{props.title}
        </h5>
      </div>
    </div>
  );
};

export default Back;
