import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { karyawanAction } from "../../config/actions/karyawan";
import EmpComponent from "./component";
import Profile from "../profile";
import { ScoreList, SelectPeriode } from "..";
import { FormPenilaian, FormScoreEdit, ValueCompleted, ValueUpdated } from "../../component";

class Employee extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanAction());
  }
  // componentDidUpdate() {
  //   this.props.dispatch(karyawanAction());
  // }
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/karyawan/:id/periode/:id/nilaispv/:spvId/terupdate" component={ValueUpdated} />
            <Route path="/karyawan/:id/periode/:id/nilaispv/:spvId" component={FormScoreEdit} />
            <Route path="/karyawan/:id/periode/:id/nilai/terkirim" component={ValueCompleted} />
            <Route path="/karyawan/:id/periode/:id/nilaispv" component={FormPenilaian} />
            <Route path="/karyawan/:id/periode/:id" component={ScoreList} />
            <Route path="/karyawan/:id/periode" component={SelectPeriode} />
            <Route path="/karyawan/:id" component={Profile} />
            <Route path="/karyawan" component={EmpComponent} />
          </Switch>
      </Router>
    );
  }
}

export default connect()(Employee);
