import React, {Component} from 'react';
import { Router } from 'react-router'
import {Route, Switch} from 'react-router-dom'

import history from './history'

import Root from './components/Root'
import Home from './components/Home'
import Students from './components/Students'

export default class Routes extends Component {

  constructor() {
    super()
    this.state = {
      help: `I'm not having fun..`
    };
  }

  render () {
    console.log(this.state.help)
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students" component={Students} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    )
  }
}
