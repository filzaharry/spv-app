import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Back, Gap } from "../../../component";
import moment from "moment";
import { API, API_URL } from "../../../config/utils/constants";

const DetailDepartemen = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    // const id = props.match;
    const id = props.match.params.id;
    Axios.get(`${API_URL}departemen/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const karyawan = data.karyawanId;
  // if (karyawan) {
  //   console.log([data.karyawanId]);
  // }

  return (
    <Fragment>
      {karyawan ? (
        <Fragment>
          {" "}
          <div className="container-sm">
            <div className="col-sm-12">
              <Gap height={20} />
              <Back onClick={()=> history.push('/departemen')} title={data.nama_dep} />
              <Gap height={20} />
              <h5 className="font-weight-bold">{karyawan.nama_dep}</h5>

              {data.karyawanId.map((karyawan) => (
                <div
                  className="employee"
                  onClick={() => history.push(`${data._id}/karyawan/profile/${karyawan._id}`)}
                >
                  <div className="row">
                    <div className="image-profile">
                      <img
                        src={`${API}${karyawan.image}`}
                        alt={karyawan.name}
                      />
                    </div>
                    <div className="col-name">
                      <p className="employee-name">{karyawan.name}</p>
                      <p className="employee-nik">APK.{karyawan.nik}</p>
                    </div>
                    <div className="col-time">
                      <p className="employee-count">
                        {moment(karyawan.tglMulai)
                          .subtract(10, "days")
                          .calendar()}
                      </p>
                      <p className="employee-profil">Lihat Profil</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </Fragment>
  );
};

export default DetailDepartemen;
