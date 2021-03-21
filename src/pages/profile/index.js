import React, { useEffect } from "react";
import { Back, Gap } from "../../component";
import "./profile.scss";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { API } from "../../config/utils/constants";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDetailKaryawan } from "../../config/redux/action/detailKaryawanAction";
import { Spinner } from "react-bootstrap";

const Profile = (props) => {
  const history = useHistory();
  const { dataKaryawan } = useSelector((state) => state.detailKaryawanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(setDetailKaryawan(id));
  }, [props, dispatch]);

  const { departId } = useParams();
  // console.log(departId);

  const toPeriode = () => {
    history.push(`/karyawan/${dataKaryawan._id}/periode`)
  }

  const departemen = dataKaryawan.departemenId;
  const jabatan = dataKaryawan.jabatanId;
  if (departemen || jabatan) {
    // console.log("departemen", departemen.nama_dep)
    // console.log("jabatan", jabatan.nama_jab)

    return (
      <div className="container-sm">
        <div className="col-sm-12">
          <Gap height={20} />
          {( departId
                  ? <Back title="Profil Karyawan" onClick={()=> history.push(`/departemen/${departId}/karyawan`)} />     
                  : <Back title="Profil Karyawan" onClick={()=> history.push('/karyawan')} />
              )}
          
          <Gap height={20} />
          <div className="text-center">
            <img
              src={`${API}${dataKaryawan.image}`}
              className="img-thumbnail rounded-circle img-profile"
              alt="employee"
              width={80}
            />
          </div>
          <Gap height={20} />
          <h3 className="text-center">{dataKaryawan.name}</h3>
          <Gap height={20} />
          <div className="mx-auto">
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>NIK</td>
                  <td>:</td>
                  <td>{dataKaryawan.nik}</td>
                </tr>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>Jabatan</td>
                  <td>:</td>
                  <td>{jabatan.nama_jab}</td>
                </tr>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>
                    Departemen
                  </td>
                  <td>:</td>
                  <td>{departemen.nama_dep}</td>
                </tr>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>
                    Mulai Kontrak
                  </td>
                  <td>:</td>
                  <td>
                    {moment(dataKaryawan.tglMulai)
                      .subtract(10, "days")
                      .calendar()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-auto text-center justify-content-center">
          {( departId
                  ? <p className="btn mx-auto disabled"></p>     
                  : <p className="btn btn-primary mx-auto " onClick={() => toPeriode(dataKaryawan._id)}>Masuk ke Periode</p>
              )}
          </div>
          <Gap height={20} />
        </div>
      </div>
    );
  }
  return (
    <div className="text-center mt-4">
      <Spinner type="grow" variant="warning" />
    </div>
  );
};

export default withRouter(Profile);
