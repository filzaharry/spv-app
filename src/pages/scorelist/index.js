import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../config/utils/constants";
import { Gap } from "../../component";

const DetailDepartemen = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`${API_URL}/karyawan/${id}/periode/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const nilaiSpv = data.nilaiSpvId;
  if (nilaiSpv) {
    console.log([data.nilaiSpvId]);
  }
  return (
    <div>
      {nilaiSpv ? (
        <Fragment>
          {" "}
          <div className="col">
            <Gap height={30} />
            <div className="container">
              <h3>Daftar Nilai</h3>
              <h6>
                Supervisor bisa menambah Nilai maksimal 12 kali dalam 1 periode
              </h6>
              <Gap height={30} />

              <Link
                className="btn btn-info"
                to={`/periode/${props.match.params.id}/nilai`}
              >
                {" "}
                Tambah Nilai
              </Link>

              <hr />

              <table className="table mt-4 shadow p-3 mb-5 bg-white rounded">
                <thead>
                  <tr className="text-primary">
                    <th scope="col">Bulan Ke</th>
                    <th scope="col">Nilai</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.nilaiSpvId.map((nilaiSpv) => (
                    <tr>
                      <td>1</td>
                      <td>{Math.trunc(nilaiSpv.hasilAkhir)}</td>
                      <td>
                        <Link to="edit">
                          <button color="info" className="btn btn-primary mr-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button color="info" className="btn btn-danger mr-2">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="text-center">
          <p>Data Nilai Tidak Ada</p>
        </div>
      )}
    </div>
  );
};

export default DetailDepartemen;
