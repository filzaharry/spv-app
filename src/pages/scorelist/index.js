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

  // const 
  const nilaiSpv = data.nilaiSpvId;
  const jumlahNilai = 12
  const totalspv = nilaiSpv && nilaiSpv.map((nilaiSpv) => Math.trunc(nilaiSpv.hasilAkhir/jumlahNilai*2))
      .reduce((a, b) => a + b, 0)

  console.log('nilaispv', totalspv);
  console.log('jmlNial', jumlahNilai);

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

            <p onClick={() => history.push(`/karyawan/${karyawanId}/periode/${data._id}/nilaispv`)} className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} /> Nilai Baru
            </p>
            <p className="btn btn-success float-right">
              Total Nilai :{" "}{totalspv}
            </p>

            <p>
              Penilaian dilakukan setiap{" "}
              <span className="text-info">1 Bulan Sekali</span>
            </p>

            <table className="table table-bordered table-responsive">
              <thead>
                <tr className="text-primary">
                  <th scope="col">Tgl Input</th>
                  <th>Bulan</th>
                  <th scope="col">Nilai</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {data.nilaiSpvId.map((nilaiSpv) => (
                  <tr key={nilaiSpv._id}>
                    <td>{moment(nilaiSpv.updatedAt).subtract(10, "days").format("L")}</td>
                    <td>{moment(nilaiSpv.updatedAt).format("MM")}</td>
                    <td>{Math.trunc(nilaiSpv.hasilAkhir*1.95)}</td>
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
