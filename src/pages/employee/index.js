import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { karyawanAction } from "../../config/actions/karyawan";
import EmpComponent from "./component";
import Profile from "../profile";
import { ValueCompleted } from "../../component";
import ValueOfEmployee from "../value";

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
            <Route path="/karyawan"  component={EmpComponent} />
            <Route path="/karyawan/:id"  component={Profile} />
            <Route path="/karyawan/:id/nilai" component={ValueOfEmployee} />
            <Route path="/karyawan/terkirim" component={ValueCompleted} />
          </Switch>
      </Router>
    );
  }
}

export default connect()(Employee);
