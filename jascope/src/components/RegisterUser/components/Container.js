import { Grid, Button} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SimpleHeader from '../../Common/SimpleHeader';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import { primaryOrange } from '../../../utils/colors';


const useStyles = makeStyles((theme) => ({
    input: {
        background: 'white'
    }
}));

// Styled Components
const CommonTitle = styled.h2`
    color: ${primaryOrange};
    font-size: 50px;
    font-family: sans-serif;
    font-weight: lighter;
    margin-left: 60px;

    @media(max-width: 900px){
        text-align: center;
        margin-left: 30px;
    }
`;

const CommonSubtitle = styled.h2`
    color: ${primaryOrange};
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
    margin-left: 60px;

    @media(max-width: 900px){
        margin-left: 30px;
    }
`;


class RegisterUserContainer extends Component{

    constructor(){
        super();


        this.onChange = this.onChange.bind(this);
    }

    /**
     * General onChange
     * @param {Object} e event
    */

    onChange(e) {
        this.setState({ 
            [e.target.id]: e.target.value 
        });
    }
    

    render(){
        const classes = useStyles;
        return(
            <Grid container>
                <SimpleHeader/>
                <Grid item xs={12}>
                   <CommonTitle>
                       ¡Es hora de conectar con todo el talento del mundo!
                   </CommonTitle>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <CommonSubtitle>
                                Regístrate
                            </CommonSubtitle>
                        </Grid>
                        {/* Username, Name and Phone */}
                        <Grid item xs={12}>
                            <Grid 
                                container 
                                spacing={9} 
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="username" 
                                        label="Username" 
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="name" 
                                        label="Nombre" 
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="phone" 
                                        label="Teléfono" 
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '40px' }}>
                            <Grid 
                                container 
                                spacing={9} 
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="email" 
                                        label="Correo electrónico" 
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="repeatEmail" 
                                        label="Confirmar correo eléctronico" 
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '40px' }}>
                            <Grid 
                                container 
                                spacing={9} 
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="password" 
                                        label="Contraseña" 
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField 
                                        fullWidth
                                        id="repeatPassword" 
                                        label="Confirmar contraseña" 
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '60px', marginBottom: '20px', textAlign: 'center' }}>
                            <Button 
                                variant="contained"     
                                style={{
                                    backgroundColor: primaryOrange,
                                    color: 'white',
                                    fontSize: '20px'
                                }}
                                onClick={() => { this.onLogin() }}
                            >
                                Listo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(RegisterUserContainer);