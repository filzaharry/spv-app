import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faList,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../config/utils/constants";
import { Back, Gap } from "../../component";
import { Spinner } from "react-bootstrap";
import moment from "moment";
// import { DataNotFound } from "../../assets";

const NilaiSupervisor = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const { karyawanId, periodeId } = useParams();

  useEffect(() => {
    // const id = props.match.params.id;
    // GET periode by ID
    Axios.get(`${API_URL}periode/${periodeId}`)
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props, periodeId]);


  const nilaiSpv = data.nilaiSpvId;
  const nilaiHrd = data.nilaiHrdId;

  // console.log('nilaispv', nilaiSpv);
  // console.log('nilaihrd', nilaiHrd);

  const totalhrd =
  nilaiHrd && nilaiHrd.map((nHrd) => nHrd.hasilAkhir).reduce((a, b) => a + b, 0);

  const totalspv =
  nilaiSpv && nilaiSpv.map((nSpv) => Math.trunc(nSpv.hasilAkhir))
      .reduce((a, b) => a + b, 0);
  // console.log(totalspv);

  const total = (totalhrd + totalspv) / 2;
  // console.log("total",total);
  return (
    <Fragment>
      <Gap height={20} />
      {nilaiSpv ? (
        <div className="container">
          <div className="col">
            <Back
              title="Daftar Nilai"
              onClick={() => history.push(`/karyawan/${karyawanId}/periode`)}
            />
            <Gap height={30} />

            <p
              onClick={() =>
                history.push(
                  `/karyawan/${karyawanId}/periode/${data._id}/nilaispv`
                )
              }
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faPlus} /> Nilai Baru
            </p>
            <p className="btn btn-success float-right">
              Total Nilai :{" "}
              {data.nilaiSpvId
                .map((nilaiSpv) =>Math.trunc(nilaiSpv.hasilAkhir))
                .reduce((a, b) => a + b, 0)}
            </p>

            <p>
              Penilaian dilakukan setiap{" "}
              <span className="text-info">1 Bulan Sekali</span>
            </p>

            <table className="table table-bordered table-responsive">
              <thead>
                <tr className="text-primary">
                  <th scope="col">Tgl Input</th>
                  <th scope="col">Nilai</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.nilaiSpvId.map((nilaiSpv) => (
                  <tr key={nilaiSpv._id}>
                    <td>
                      {moment(nilaiSpv.updatedAt)
                        .subtract(10, "days")
                        .format("L")}
                    </td>
                    <td>{Math.trunc(nilaiSpv.hasilAkhir)}</td>
                    <td>{ total <= 3 ? (
                <p className="text-danger">
                  <FontAwesomeIcon icon={faTimes} /> Selesai
                </p>
              ) : (
                <p className="text-success">
                  <FontAwesomeIcon icon={faCheck} /> Diperpanjang
                </p>
              )}
</td>
                    <td>
                      <p
                        onClick={() =>
                          history.push(
                            `/karyawan/${karyawanId}/periode/${data._id}/nilaispv/${nilaiSpv._id}`
                          )
                        }
                        className="rounded-circle btn btn-info mr-2"
                      >
                        <FontAwesomeIcon icon={faList} />
                      </p>
                      {/* <p className="rounded-circle btn btn-warning mr-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </p>
                          <p className="rounded-circle btn btn-danger mr-2" onClick={()=> handleRemove(nilaiSpv._id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </p> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center mx-auto">
          {/* <DataNotFound /> */}
          <Gap height={100} />
          <Spinner />
          <p>Loading data...</p>
        </div>
      )}
    </Fragment>
  );
};

export default withRouter(NilaiSupervisor);
