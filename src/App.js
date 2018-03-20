import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Login from  './Components/Login/login';
import Dashboard from './Components/Dashboard/dashboard';
import Wizard from './Components/Wizard/wizard';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={`/dashboard`} component={Dashboard}/>
            <Route path={`/wizard/:id`} component={Wizard}/>
            <Route path={`/`} component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
