import React from "react";
import { RefreshIC } from "../../../assets";
import { Gap } from "../../atoms";

const ValueCompleted = () => {
  return (
    <div className="container-sm text-center">
      <Gap height={50} />
      <div className="col-sm-12 mt-4 pt-4">
        <img src={RefreshIC} alt="value-complete" style={{ width: "100px" }} />
        <Gap height={20} />
        <h3>
          Penilaian Anda <br /> berhasil diubah
        </h3>
        <p>Perubahan Penilaian secara otomatis akan masuk ke dalam data HRD</p>
      </div>
    </div>
  );
};

export default ValueCompleted;
