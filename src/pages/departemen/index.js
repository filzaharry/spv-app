import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Departemen from './list'
import { connect } from "react-redux";
import Profile from "../profile";
import { departemenAction } from "../../config/actions/departemen";
import DetailDepartemen from "./detail";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(departemenAction());
  }
  componentDidUpdate() {
    this.props.dispatch(departemenAction());
  }
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/karyawan/:id" component={Profile} />
            <Route path="/departemen/:id" component={DetailDepartemen} />
            <Route path="/departemen"  component={Departemen} />
          </Switch>
      </Router>
    );
  }
}

export default connect()(Routes);
