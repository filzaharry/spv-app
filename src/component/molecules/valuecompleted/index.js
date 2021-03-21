import React from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { ThumbsIC } from "../../../assets";
import { Gap } from "../../atoms";

const ValueCompleted = (props) => {
  const history = useHistory()
  const {karyawanId, periodeId} =useParams()
  // const id = props.match.params.id
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
        <p className="btn btn-info" onClick={()=> history.push(`/karyawan/${karyawanId}/periode/${periodeId}`)}>Kembali ke daftar Nilai</p>
      </div>
    </div>
  );
};

export default withRouter(ValueCompleted);
