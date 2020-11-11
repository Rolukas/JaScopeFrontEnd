import { Grid, Button} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SimpleHeader from '../../Common/SimpleHeader';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import validator from 'validator';
import Lottie from 'react-lottie';
// Assets
import { primaryOrange } from '../../../utils/colors';
import loading from '../../../assets/loading.json';
// API
import API from '../../../utils/environment';


const useStyles = makeStyles((theme) => ({
    input: {
        background: 'white'
    }
}));

const lottieDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

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

        this.state = {
            username: '',
            name: '',
            phone: '',
            email: '',
            repeatEmail: '',
            password: '',
            repeatPassword: '',
            isSnackbarOpen: false,
            message: '',
            isLoading: false
        }

        this.timeOutId = null;

        this.onChange = this.onChange.bind(this);
        this.goToChooseProfile = this.goToChooseProfile.bind(this);
        this.openSnackbar = this.openSnackbar.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
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

    goToChooseProfile(){
        console.log("ENTRA")

        if(this.isAllValidated()){
            console.log("asd")
            let {
                username,
                name,
                phone,
                email,
                password
            } = this.state;
    
            let userInformation = {
                user: username,
                name,
                num: phone,
                email,
                pass: password
            }
    
            this.onCreateUser(userInformation)
        }

    }

    isAllValidated(){
        console.log("VAL")

        if(!validator.isLength(this.state.username, 3, 250)){
            this.openSnackbar('Por favor, ingrese un nombre de usuario válido');
            return false
        }

        if(!validator.isLength(this.state.name, 3, 250)){
            this.openSnackbar('Por favor, ingrese un nombre válido');
            return false
        }

        if(!validator.isLength(this.state.name, 3, 250)){
            this.openSnackbar('Por favor, ingrese un nombre válido');
            return false
        }

        if(!validator.isLength(this.state.password, 3, 250)){
            this.openSnackbar('Por favor, ingrese una contraseña válida');
            return false
        }

        if(!validator.isEmail(this.state.email)){
            this.openSnackbar('Por favor, ingrese un correo válido');
            return false
        }

        if(!validator.isMobilePhone(this.state.phone)){
            this.openSnackbar('Por favor, ingrese un teléfono válido');
            return false
        }

        if(this.state.email !== this.state.repeatEmail){
            this.openSnackbar('Los emails no coinciden');
            return false
        }

        if(this.state.password !== this.state.repeatPassword){
            this.openSnackbar('Los passwords no coinciden');
            return false
        }

        return true;
    }

    onCreateUser = async(userInfo) => {

        try{

            this.setState({
                isLoading: true
            });

            let request = await API.API_URL.post('/User', userInfo);

            console.log(request)

            if(request.data.success === true){

                this.props.history.push({ 
                    pathname: '/choose-profile', 
                    state: {
                        userInformation: request.data.items[0]
                    }
                });

            } else {

                this.setState({
                    isLoading: false
                });

                if(request.data.message === 'user already created'){
                    this.openSnackbar('Ya hay una cuenta con ese usuario');
                } else {
                    this.openSnackbar('Ocurrió un error');
                }

            }

        } catch(e){
            this.openSnackbar('Ocurrió un error');
            this.setState({
                isLoading: false
            });
            console.log(e);
        }

    }

    openSnackbar = (message) => {

        this.timeOutId = setTimeout(() => {
            setTimeout(() => {
                this.setState({
                    isSnackbarOpen: true,
                    message
                })
            }, 300);
        });
        
    }

    closeSnackbar = () => {
        this.setState({
            isSnackbarOpen: false
        })
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
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    autoHideDuration={6000}
                    open={this.state.isSnackbarOpen}
                    onClose={this.closeSnackbar}
                    message={this.state.message}
                />
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
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12}>
                                    <Grid container spacing={9} >
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="username" 
                                                label="Username" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.username}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="name" 
                                                label="Nombre" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.name}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="phone" 
                                                label="Teléfono" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.phone}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '40px' }}>
                            <Grid 
                                container 
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12} >
                                    <Grid container spacing={9} >
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="email" 
                                                label="Correo electrónico" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="repeatEmail" 
                                                label="Confirmar correo eléctronico" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.repeatEmail}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '40px' }}>
                            <Grid 
                                container 
                                style={{
                                    paddingLeft: '30px',
                                    paddingRight: '30px'
                                }}
                            >
                                <Grid item xs={12} >
                                    <Grid container spacing={9} >
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="password" 
                                                label="Contraseña" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.password}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                fullWidth
                                                id="repeatPassword" 
                                                label="Confirmar contraseña" 
                                                onChange={(e) => { this.onChange(e) }}
                                                value={this.state.repeatPassword}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '60px', marginBottom: '20px', textAlign: 'center' }}>
                            {
                                !this.state.isLoading ?
                                    <Button 
                                        variant="contained"     
                                        style={{
                                            backgroundColor: primaryOrange,
                                            color: 'white',
                                            fontSize: '20px'
                                        }}
                                        onClick={() => { this.goToChooseProfile() }}
                                    >
                                        Listo
                                    </Button>
                                :
                                    <Lottie options={lottieDefaultOptions} height={50} width={50}/>   
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(RegisterUserContainer);