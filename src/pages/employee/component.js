import moment from "moment";
import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron } from "../../component";
import "./employee.scss";

const mapStateToProps = (state) => {
  return {
    getKaryawanList: state.karyawan.getKaryawanList,
    errorKaryawanList: state.karyawan.errorKaryawanList,
  };
};

const EmpComponent = (props) => {
  const responseAPI = props.getKaryawanList.data;
  // console.log("response: ", responseAPI);

  return (
    <div className="text-center">
      <Jumbotron jumbotronTitle="Daftar Karyawan Kontrak Outsourcing" />
      {responseAPI ? (
        <Fragment>
          {responseAPI &&
            responseAPI.map((getKaryawanList, index) => (
              <Link key={index} to={`/karyawan/${getKaryawanList._id}`}>
                <div class="employee">
                  <div class="row">
                    <div class="image-profile">
                      <img
                        src={`http://localhost:4000/${getKaryawanList.image}`}
                        alt={getKaryawanList.name}
                      />
                    </div>
                    <div class="col-name">
                      <p class="employee-name">{getKaryawanList.name}</p>
                      <p class="employee-nik">APK.{getKaryawanList.nik}</p>
                    </div>
                    <div class="col-time">
                      <p class="employee-count">{moment(getKaryawanList.tglMulai).subtract(10, 'days').calendar()}</p>
                      <p class="employee-profil">Lihat Profil</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </Fragment>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(EmpComponent);
