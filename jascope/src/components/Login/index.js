import React, { Component } from 'react';
import Container from './components/Container';
import { withRouter } from 'react-router-dom';

class Login extends Component{

    render(){
        return(
            <Container/>
        )
    }
}

export default withRouter(Login);