import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
// Redux
import store from './store';
import { Provider } from 'react-redux';
// Routes
import Login from './components/Login';
import RegisterEnterprise from './components/RegisterEnterprise';
import RegisterTalent from './components/RegisterTalent';
import RegisterUser from './components/RegisterUser';
import ChooseProfile from './components/ChooseProfile';

// Private Routes
class PrivateContainer extends Component{
  // render(){
  //   return(
      
  //   );
  // }
}

// Public Routes
class GuestContainer extends Component{
    render(){
      return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register-user" component={RegisterUser} />
            <Route exact path="/choose-profile" component={ChooseProfile} />
            <Route component={PrivateContainer} />
        </Switch>
      );
    }
}

class App extends Component {

    render(){
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <GuestContainer/>
            </Switch>
          </BrowserRouter>
        </Provider>
      );
    }
}

export default App;
