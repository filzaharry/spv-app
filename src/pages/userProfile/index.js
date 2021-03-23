import React, { useEffect } from "react";
import { Back, Button, Gap } from "../../component";
import { setDataUser } from "../../config/redux/action";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { User } from "../../assets";
import swal from "sweetalert";

const UserProfile = () => {
  const { dataUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setDataUser());
  }, [dispatch]);  

  const logOut = () => {
    swal({
      title: "Keluar Akun ?",
      text: "Jangan Khawatir!, semua data yang sudah diinput tidak akan hilang",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Sampai jumpa!", {
          icon: "success",
        });
        localStorage.clear()
        window.location.reload();
      } else {
        swal("Anda masih nyaman dengan kami :)");
      }
    });
  }
  return (
    <div className="container-sm">
      <Back title="Kembali ke Home" route="/user-profile" onClick={()=> history.push('/')} />
        <div className="col-sm-12 text-center">
          <Gap height={20} />
          <img src={User} alt="user" height={100} />
          <Gap height={20} />
          <h3 className="text-center">{dataUser.namaLengkap}</h3>
          <Gap height={20} />
          <div className="mx-auto">
            <table className="table table-sm table-borderless text-left">
              <tbody>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>Username</td>
                  <td>:</td>
                  <td>{dataUser.username}</td>
                </tr>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>Email</td>
                  <td>:</td>
                  <td>{dataUser.email}</td>
                </tr>
                <tr>
                  <td style={{ maxWidth: "200px", width: "150px" }}>
                    Akun dibuat
                  </td>
                  <td>:</td>
                  <td>
                    {moment(dataUser.createdAt)
                      .subtract(10, "days")
                      .calendar()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Gap height={20} />
          <Button title="Keluar" onClick={logOut} />
        </div>
      </div>
    );
};

export default UserProfile;
