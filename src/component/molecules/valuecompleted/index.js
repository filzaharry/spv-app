import React from "react";
import { ThumbsIC } from "../../../assets";
import { Gap } from "../../atoms";

const ValueCompleted = () => {
  return (
    <div className="container-sm text-center">
      <Gap height={50} />
      <div className="col-sm-12 mt-4 pt-4">
        <img src={ThumbsIC} alt="value-complete" style={{ width: "100px" }} />
        <Gap height={20} />
        <h3>
          Penilaian Anda <br /> berhasil dikirim
        </h3>
        <p>Hasil Penilaian secara otomatis akan masuk ke dalam data HRD</p>
      </div>
    </div>
  );
};

export default ValueCompleted;
