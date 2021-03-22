import React, { Fragment } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gap } from "../../component/atoms";
import { Jumbotron } from "../../component/molecules";
import About from "../about";
import ResetPassword from "../reset";


const logOut = () => {
  confirmAlert({
    title: "Confirm to Delete",
    message:
      "Apakah Anda Yakin ingin Keluar ?",
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          // console.log(_id);
          localStorage.clear()
          window.location.reload();
        },
      },
      {
        label: "No",
        onClick: () => alert("User Tidak Setuju"),
      },
    ],
  });
}

const compBtn = () => {
  return (
    <Fragment>
      <Jumbotron jumbotronTitle="Pengaturan Aplikasi" />
      <section class="container text-center">
        <Link
          to="/pengaturan/ganti-password"
          className="btn btn-info"
          style={{ width: "180px" }}
        >
          Ganti Password
        </Link>
        <br />
        <Gap height={10} />
        <Link
          to="/pengaturan/tentang"
          className="btn btn-info"
          style={{ width: "180px" }}
        >
          Tentang
        </Link>
        <br />
        <Gap height={10} />
        <Link
          to="/login"
          className="btn btn-info"
          style={{ width: "180px" }}
          onClick={logOut}
        >
          Logout
        </Link>
      </section>
    </Fragment>
  );
};

const Settings = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pengaturan/ganti-password" component={ResetPassword} />
        <Route path="/pengaturan/tentang" component={About} />
        <Route path="/pengaturan" component={compBtn} />
      </Switch>
    </Router>
  );
};

export default Settings;
