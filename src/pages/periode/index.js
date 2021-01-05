import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FormScore } from '..'
import { ValueCompleted } from '../../component'
import SelectPeriode from './component'
import ScoreList from '../scorelist'

const Periode = () => {
    return (
        <Router>
          <Switch>
            <Route path="/periode/:id/nilai/terkirim" component={ValueCompleted} />
            <Route path="/periode/:id/nilai" component={FormScore} />
            <Route path="/periode/:id" component={ScoreList} />
            <SelectPeriode />
          </Switch>
      </Router>
    )
}

export default Periode
