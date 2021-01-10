import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import '../periode/periode.scss'
import { Gap } from "../../component";
import { API_URL } from "../../config/utils/constants";
// import { DataNotFound } from "../../assets";

const PeriodeKaryawan = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // GET periode by ID
    const id = props.match.params.id;
    // console.log("pee", id);
    Axios.get(`${API_URL}karyawan/${id}`)
      .then((res) => {
        setData(res.data.data);
        // console.log("oee", res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const periode = data.periodeId;
  return (
    <div className="container-sm">
      <div className="col-sm-12">
        <Gap height={20} />
        <Link to="/karyawan" className="btn btn-info">
          Kembali
        </Link>
        <Gap height={20} />
        <div>
          <h5 className="font-weight-bold">Pilih Periode</h5>

          {periode &&
            periode.map((getPeriodeList) => (
              <Link to={`periode/${getPeriodeList._id}`} key={getPeriodeList._id}>
                <div className="periode">
                  <div className="row">
                    <div className="col-date">
                      <p className="period-text-1">Mulai : </p>
                      <p className="period-text-2 pb-2 text-secondary">
                        {moment(getPeriodeList.tglMulai)
                          .subtract(10, "days")
                          .format("LL")}
                      </p>
                      <p className="period-text-1">Selesai : </p>
                      <p className="period-text-2 pb-2 text-secondary">
                        {moment(getPeriodeList.tglSelesai)
                          .subtract(10, "days")
                          .format("LL")}
                      </p>
                    </div>
                    <div className="col-order ml-auto">
                      <p className="period-order">{getPeriodeList.totalNilai}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodeKaryawan;
