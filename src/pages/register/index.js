import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Footer, Gap, PassToggle, Wave } from "../../component";
import Axios from 'axios'
import swal from "sweetalert";
import addNotification from "react-push-notification";
import { LOCAL } from "../../config/utils/constants";
import Departemen from "./selectDep";
import Jabatan from "./selectJab";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const history = useHistory();
  const[namaLengkap, setNamaLengkap] = useState('');
  const[departemen, setDepartemen] = useState('');
  const[jabatan, setJabatan] = useState('');
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');
  const[PasswordInputType, ToggleIcon] = PassToggle();

  const onChangeNamaLengkap =(e)=> {
    const value = e.target.value;
    setNamaLengkap(value);
    setError('')
  }
  const onChangeJabatan = (e) => {
    const value = e.target.value;
    setJabatan(value);
    setError("");
  };
  const onChangeDepartemen = (e) => {
    const value = e.target.value;
    setDepartemen(value);
    setError("");
  };
  const onChangeUsername =(e)=> {
    const value = e.target.value;
    setUsername(value);
    setError('')
  }
  const onChangeEmail =(e)=> {
    const value = e.target.value;
    setEmail(value);
    setError('')
  }
  const onChangePassword =(e)=> {
    const value = e.target.value;
    setPassword(value);
    setError('')
  }

  const RegisterClick = () => {
    const data = {
      username: username,
      namaLengkap: namaLengkap,
      departemen: departemen,
      jabatan: jabatan,
      email: email,
      password: password,
    };
    // console.log(data);
    Axios
      .post(`${LOCAL}v1/register`, data)
      .then((result) => {
        history.push("/login");
        if (result) {
          if (result.data) {
            setNamaLengkap("");
            setDepartemen("");
            setJabatan("");
            setUsername("");
            setEmail("");
            setPassword("");
            swal(
              "Berhasil !",
              result.data.message,
              "success"
            );
            addNotification({
              title: `Selamat Datang ${result.data.namaLengkap}`,
              message: result.data.message,
              theme: "darkblue",
              native: true,
              duration: 30000,
            });
          }
        }
      })
      .catch((error) => {
        toast(error.response.data.message)
        setError(error.response.data.message);
      });
  };


  return (
    <section>
      <Wave />
      <div className="container">
        <div className="col-sm-12">
        {error && (
          <div>
            <ToastContainer/>
          </div>
        )}
          <h3>Daftar User Baru</h3>
          <Gap height={20} />
          <div className="form-group">

          <label htmlFor="namaLengkap">Nama Supervisor</label>
            <input
              type="text"
              className="form-control"
              id="namaLengkap"
              placeholder="Nama Lengkap Supervisor"
              onChange={onChangeNamaLengkap}
            />
            <Gap height={10} />

              
            <p className="text-danger">*Departemen dan Jabatan wajib diisi</p>
            <div class="form-row">
              <div class="form-group col">
              <label for="jabatan">Jabatan</label>
                <select
                  id="jabatan"  
                  className="form-control"
                  value={jabatan}
                  onChange={onChangeJabatan}
                >
                  <option selected>Choose...</option>
                  <Jabatan />
                </select>
              </div>
              <div class="form-group col">
              <label for="departemen">Departemen</label>
                <select
                  id="departemen"
                  className="form-control"
                  value={departemen}
                  onChange={onChangeDepartemen}
                >
                  <option selected>Choose...</option>
                  <Departemen />
                </select>
              </div>
            </div>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Nama Pengguna"
              onChange={onChangeUsername}
            />
            <Gap height={20} />

            <label htmlFor="email">Alamat E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Masukkan Email"
              onChange={onChangeEmail}
            />
            <Gap height={20} />

            <label htmlFor="password">Password</label>
            <input
              type={PasswordInputType}
              className="form-control"
              id="password"
              placeholder="Masukkan Password"
              onChange={onChangePassword}
              />
              <span className="password-toggle-icon">{ToggleIcon}</span>
            
            <Gap height={40} />

            <Button
              onClick={RegisterClick}
              title="Daftar Baru"
            />
            <Gap height={10} />

            <Button
              onClick={() => history.push("/login")}
              className="btn btn-secondary btn-block"
              title="Kembali ke Login"
            />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
