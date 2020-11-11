import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Button} from '@material-ui/core';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Lottie from 'react-lottie';
import Snackbar from '@material-ui/core/Snackbar';
import Hidden from '@material-ui/core/Hidden';
// Assets
import { primaryOrange } from '../../../utils/colors';
import backgroundWallpaper from '../../../assets/background-login.svg';
import redLogo from '../../../assets/red-logo.svg';
import loading from '../../../assets/loading.json';
// API
import API from '../../../utils/environment';
import encryptor from '../../../utils/ecrypt';


const styles = {
    root: {
      background: "black"
    },
    input: {
      backgroundColor: 'white',
      width: '300px',
      marginBottom: '30px'
    }
};

const lottieDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};
  

// Styled Components
const LightTitle = styled.h2`
    color: black;
    font-size: 40px;
    font-family: sans-serif;
    font-weight: lighter;
    margin-bottom: 0px;
`;

const StrongTitle = styled.h2`
    color: ${primaryOrange};
    font-size: 45px;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 0px;
`;

const ForgotPassLabel = styled.h2`
    color: ${primaryOrange};
    text-decoration: underline;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 500;
`;

const ModalTitle = styled.h2`
    color: ${primaryOrange};
    font-size: 20px;
    font-family: sans-serif;
    text-align: center;
`;

const ModalSubitle = styled.h2`
    color: ${primaryOrange};
    font-size: 14px;
    margin: 20px 20px;
    font-weight: 500;
    font-family: sans-serif;
    text-align: center;
`;


class LoginContainer extends Component{

    constructor(){
        super();

        this.state = {
            isSnackbarOpen: false,
            message: '',
            isLoading: false,
            us: 'talent',
            pw: 'land'
        }

        this.onChange = this.onChange.bind(this);
        this.openSnackbar = this.openSnackbar.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    componentDidMount(){
        
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

    openSnackbar = (message) => {
        this.setState({
            isSnackbarOpen: true,
            message
        })
    }

    closeSnackbar = () => {
        this.setState({
            isSnackbarOpen: false
        })
    }

    goToRegister(){

    }

    onLogin = async() => {

        try{

            this.setState({
                isLoading: true
            });

            let { us, pw } = this.state;

            var username = us;
            var password = pw;
            const usernamePasswordBuffer = Buffer.from(username + ':' + password);
            const base64data = usernamePasswordBuffer.toString('base64');
            const encryptedBase64Data = encryptor(base64data.toString());

            console.log(encryptedBase64Data)
    
            let request = await API.API_URL.get('/login', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${encryptedBase64Data}`,
                }
            });

            if(request.data.success === true){
                // Save headers
                API.setAPIHeadersConfiguration(encryptedBase64Data);
                // Go to main

                //this.props.history.push('/documentacion');

            } else if(request.data.success === false) {
                this.openSnackbar('Ocurrió un error, verifique sus credenciales');
            }
    
            console.log(request);

        } catch(e) {
            console.log(e);
            this.setState({
                isLoading: false
            });
            this.openSnackbar('Ocurrió un error, verifique sus credenciales');
        }

    }

    render(){

        const classes = styles;

        return(
            <Grid 
                container
            >
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
                <Hidden smDown>
                    <Grid 
                        item 
                        xs={12} 
                        md={8}
                        style={{
                            backgroundImage: `url(${backgroundWallpaper})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh'
                        }}
                    >
                    </Grid>
                </Hidden>
                <Grid 
                    item 
                    xs={12} 
                    md={4}
                    style={{
                        height: '100vh'
                    }}
                >
                    <Grid 
                        container
                        style={{
                            transform: 'translateY(15vh)'
                        }}
                    >
                        <Grid 
                            item 
                            xs={12}
                            style={{ textAlign: 'center' }}
                        >
                            <img 
                                
                                style={{
                                    height: 'auto',
                                    width: '25%'
                                }}
                                src={redLogo}
                            />
                            <LightTitle>
                                Bienvenido a
                            </LightTitle>
                            <StrongTitle>
                                JaScope
                            </StrongTitle>
                        </Grid>
                        <Grid 
                            item 
                            xs={12} 
                            style={{textAlign: 'center'}}
                        >
                            <form noValidate autoComplete="off">
                                <TextField 
                                    style={{
                                        maxWidth: '350px',
                                        minWidth: '250px',
                                        marginBottom: '20px'
                                    }}
                                    id="us" 
                                    label="Usuario" 
                                    variant="filled" 
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    value={this.state.us}
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <br/>
                                <TextField 
                                    style={{
                                        maxWidth: '350px',
                                        minWidth: '250px',
                                        
                                    }}
                                    id="pw"
                                    label="Contraseña" 
                                    variant="filled" 
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    value={this.state.pw}
                                    onChange={(e) => { this.onChange(e) }}
                                    type={ 'password' }
                                />
                            </form>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <Grid container>
                                <Grid item xs={12}
                                    style={{
                                       textAlign: 'center'
                                    }}
                                >
                                    <Button
                                        onClick={ () => { this.goToRegister() }}
                                        style={{
                                            color: primaryOrange,
                                            textDecoration: 'underline',
                                            marginTop: '5px'
                                        }}
                                    >
                                        ¿No tienes cuenta? Regístrate
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{ textAlign: 'center' }}
                        >
                            {
                                this.state.isLoading === false ?
                                    <Button 
                                        variant="contained"     
                                        style={{
                                            backgroundColor: primaryOrange,
                                            color: 'white'
                                        }}
                                        onClick={() => { this.onLogin() }}
                                    >
                                        Entrar
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

export default LoginContainer;