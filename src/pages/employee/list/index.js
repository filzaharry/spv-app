import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Jumbotron } from "../../../component";
import { setDataKaryawan } from "../../../config/redux/action/karyawanAction";
import { API } from "../../../config/utils/constants";
import '../employee.scss'

const EmployeeList = () => {
  const history = useHistory();
  const { dataKaryawan } = useSelector((state) => state.karyawanReducer);
  const dispatch = useDispatch();
  const [mode, setMode] = useState('online');

  useEffect(() => {
    dispatch(setDataKaryawan());
  }, [dispatch, setMode]);

  return (
    <div className="text-center">
      <Jumbotron jumbotronTitle="Daftar Karyawan Kontrak Outsourcing" />
      
      <form className="form-inline mx-auto search">
        <input className="form-control" type="search" placeholder="Cari Karyawan" />
        <FontAwesomeIcon icon={faSearch} className="text-info icon-search"/>
      </form>
<div>
  {
    mode==='offline'?
    <p className="alert-warning">Anda berada dalam mode offline</p>
    :null
  }
</div>
      {dataKaryawan.map((getKaryawanList, index) => (
          <div className="employee" onClick={()=> history.push(`karyawan/${getKaryawanList._id}`)}>
            <div className="row">
              <div className="image-profile">
                <img
                  src={`${API}${getKaryawanList.image}`}
                  alt={getKaryawanList.name}
                />
              </div>
              <div className="col-name">
                <p className="employee-name">{getKaryawanList.name}</p>
                <p className="employee-nik">APK.{getKaryawanList.nik}</p>
              </div>
              <div className="col-time">
                <p className="employee-count">
                  {moment(getKaryawanList.tglMulai)
                    .subtract(10, "days")
                    .calendar()}
                </p>
                <p className="employee-profil">Lihat Profil</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default EmployeeList;
