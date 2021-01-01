import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gap } from "../../component";
import moment from "moment";
import "./departemen.scss"

const DetailDepartemen = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    // const id = props.match;
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/hrd/departemen/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const karyawan = data.karyawanId;
  if (karyawan) {
    console.log([data.karyawanId]);
  }



  return (
    <Fragment>
      {karyawan ? (
        <Fragment>
          {" "}
          <div className="container-sm">
            <div className="col-sm-12">
              <Gap height={20} />
              <Link to="/departemen" className="btn btn-info">
                Kembali
              </Link>
              <Gap height={20} />
              <h5 className="font-weight-bold">{karyawan.nama_dep}</h5>

              {data.karyawanId.map((karyawan) => (
                <div class="employee" onClick={()=> props.history.push(`/karyawan/${karyawan._id}`)}>
                  <div class="row">
                    <div class="col-name">
                      <p class="dep-employee-date">Tanggal Masuk : {moment(karyawan.tglMulai).subtract(10, 'days').calendar()}</p>
                      <p class="dep-employee-name">{karyawan.name}</p>
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
