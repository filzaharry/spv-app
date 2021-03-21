import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "../profile";
import { Periode, ScoreList } from "..";
import { FormPenilaian, FormScoreEdit, ValueCompleted, ValueUpdated } from "../../component";
import EmployeeList from './list';
import ScoreListDetail from '../scorelist/detail';

const Employee = () => {
  return (
      <Router>
          <Switch>
            <Route path="/karyawan/:karyawanId/periode/:periodeId/nilaispv/:spvId/terupdate" component={ValueUpdated} />
            <Route path="/karyawan/:karyawanId/periode/:periodeId/nilaispv/:spvId/edit" component={FormScoreEdit} />
            <Route path="/karyawan/:karyawanId/periode/:periodeId/nilaispv/terkirim" component={ValueCompleted} />

            <Route path="/karyawan/:karyawanId/periode/:periodeId/nilaispv/:id" component={ScoreListDetail} />
            <Route path="/karyawan/:karyawanId/periode/:periodeId/nilaispv" component={FormPenilaian} />
            
            <Route path="/karyawan/:karyawanId/periode/:periodeId" component={ScoreList} />
            <Route path="/karyawan/:id/periode" component={Periode} />
            
            <Route path="/karyawan/:id" component={Profile} />
            <Route path="/karyawan" component={EmployeeList} />
          </Switch>
      </Router>
  )
}

export default Employee





