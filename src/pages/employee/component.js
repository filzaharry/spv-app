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
              <Link key={index} to={`karyawan/${getKaryawanList._id}`}>
                <div className="employee">
                  <div className="row">
                    <div className="image-profile">
                      <img
                        src={`https://aplus-hrd-api-server.herokuapp.com/${getKaryawanList.image}`}
                        alt={getKaryawanList.name}
                      />
                    </div>
                    <div className="col-name">
                      <p className="employee-name">{getKaryawanList.name}</p>
                      <p className="employee-nik">APK.{getKaryawanList.nik}</p>
                    </div>
                    <div className="col-time">
                      <p className="employee-count">{moment(getKaryawanList.tglMulai).subtract(10, 'days').calendar()}</p>
                      <p className="employee-profil">Lihat Profil</p>
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
