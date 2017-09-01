import React, {Component} from 'react';
import { Router } from 'react-router'
import {Route, Switch} from 'react-router-dom'

import history from './history'

import Root from './components/Root'
import Home from './components/Home'
import Students from './components/Students'
import CampusView from './components/CampusView'
import StudentView from './components/StudentView'
import AddStudent from './components/AddStudent'

import store from './store'

export default class Routes extends Component {

  constructor(){
    super();
    this.state = store.getState();
  }

  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/campuses/:id" component={CampusView} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:id" component={StudentView} />
            <Route path="/addstudent" component={AddStudent} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    )
  }
}
