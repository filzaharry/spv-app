import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailDepartemen from './detail';
import ListDepartemen from './list';
import "./departemen.scss"
import { Profile } from '..';

const Departemen = () => {
  return (
      <Router>
          <Switch>
            <Route path="/departemen/:departId/karyawan/profile/:id" component={Profile} />
            <Route path="/departemen/:id" component={DetailDepartemen} />
            <Route path="/departemen"  component={ListDepartemen} />
          </Switch>
      </Router>
    );
  }

export default Departemen

