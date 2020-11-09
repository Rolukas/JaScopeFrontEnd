import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/environment';
import { Route, Switch, BrowserRouter } from "react-router-dom";
// Routes
import Login from './components/Login';
import RegisterEnterprise from './components/RegisterEnterprise';
import RegisterTalent from './components/RegisterTalent';

class App extends Component {

    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
