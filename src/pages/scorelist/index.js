import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL, API_URL_SPV } from "../../config/utils/constants";
import { Gap } from "../../component";
import { Spinner } from "react-bootstrap";
import swal from "sweetalert";
import moment from 'moment'
// import { DataNotFound } from "../../assets";


const NilaiSupervisor = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    // GET periode by ID
    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);

  const handleRemove = (nilaiSpv) => {
    // console.log("yoi",nilaiSpv);
    swal({
      title: "Are you sure?",
      text: "Jika Nilai dihapus, maka seluruh data nilai terkait akan terhapus",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        // console.log(spvId);
      Axios.delete(`${API_URL_SPV}nilaispv/${nilaiSpv}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
        swal("Data Nilai telah di hapus!", {
          icon: "success",
        });
        window.location.reload(false);
      } else {
        swal("Periksa kembali sebelum menghapus data");
      }
    });
  }

    const id = props.match.params.id
  const nilaiSpv = data.nilaiSpvId;
  // if (nilaiSpv) {
  //   console.log([data.nilaiSpvId]);
  // }
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
                to={`${id}/nilaispv`}
              >
                {" "}
                Tambah Nilai
              </Link>

              <table className="table mt-4 shadow p-3 mb-5 bg-white rounded">
                <thead>
                  <tr className="text-primary">
                    <th scope="col">Tanggal</th>
                    <th scope="col">Nilai</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.nilaiSpvId.map((nilaiSpv) => (
                    <tr key={nilaiSpv._id}>
                      <td>{moment(nilaiSpv.updatedAt)
                          .subtract(10, "days")
                          .format("L")}</td>
                      <td>{Math.trunc(nilaiSpv.hasilAkhir)}</td>
                      <td>
                        <Link to={`${id}/nilaispv/${nilaiSpv._id}`}>
                          <button color="info" className="btn btn-primary mr-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </Link>
                          <button color="info" className="btn btn-danger mr-2" onClick={()=> handleRemove(nilaiSpv._id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="text-center mx-auto">
          {/* <DataNotFound /> */}
          <Gap height={100} />
          <Spinner />
          <p>Loading data...</p>
        </div>
      )}
    </div>
  );
};

export default NilaiSupervisor;
