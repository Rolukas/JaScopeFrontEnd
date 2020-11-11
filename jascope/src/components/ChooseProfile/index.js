import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from './components/Container';

class ChooseProfile extends Component{

    render(){
        return(
            <Container/>
        )
    }
}

export default withRouter(ChooseProfile);