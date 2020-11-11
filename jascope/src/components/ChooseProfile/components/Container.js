import { Grid, Button} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SimpleHeader from '../../Common/SimpleHeader';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Snackbar from '@material-ui/core/Snackbar';
import Lottie from 'react-lottie';
// Assets
import loading from '../../../assets/loading.json';
import imTalent from '../../../assets/im-talent.svg';
import imCompany from '../../../assets/im-company.svg';
import { primaryOrange } from '../../../utils/colors';
// API
import API from '../../../utils/environment';

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
        margin: auto;
        margin-top: 20px;
        margin-bottom: 40px;
    }
`;

const Description = styled.p`
    color: black;
    font-size: 27px;
    width: 350px;
    text-align: center;
    margin: auto;
`;

class ChooseProfileContainer extends Component{

    constructor(){
        super();

        this.state = {
            handlerUserId: 0,
            isSnackbarOpen: false,
            duration: 6000,
            message: '',
            registerSuccessfull: false,
            isLoadingCompany: false,
            isLoadingTalent: false
        }
    }


    componentDidMount(){

        console.log(this.props)
        
        if(this.props.location.state === null || this.props.location.state === undefined){
            this.props.history.push({ 
                pathname: '/', 
            });
        } else if(this.props.location.state.userInformation === undefined || this.props.location.state.userInformation === null) {
            
            this.props.history.push({ 
                pathname: '/', 
            });
            
        } else {

            this.setState({
                handlerUserId: this.props.location.state.userInformation.usuarioid
            });

            this.props.history.replace(this.props.location.pathname, null);
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

    onChooseProfile = async(profile) => {

       try{

        if(this.state.isLoadingCompany || this.state.isLoadingTalent){
            return false
        }

        this.setState({
            isLoadingCompany: profile === 'company' ? true : false,
            isLoadingTalent: profile === 'talent' ? true : false
        });

        let body = {
            userId: this.state.handlerUserId,
            profileId: profile === 'talent' ? 1 : 2
        }

        let request = await API.API_URL.post('/Profile', body);

        console.log(request)

        if(request.data.success === true){

            this.setState({
                registerSuccessfull: true
            });

        } else {
            this.openSnackbar('Ocurrió un error.');
            this.setState({
                isLoadingCompany: false,
                isLoadingTalent: false
            });
        }

       } catch(e){  
            this.openSnackbar('Ocurrió un error.');
            console.log(e);
            this.setState({
                isLoadingCompany: false,
                isLoadingTalent: false
            });
       }

    }

    onRenderChooseProfile = () => {
        return(
            <Grid container>
                <Grid 
                    item 
                    xs={12} 
                    md={6}
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={imTalent}
                        style={{
                            height: 'auto',
                            width: '100%',
                            maxWidth: '500px',
                            minHeight: '400px'
                        }}
                    />
                    <Description>
                        Soy una empresa u organización en busca de talento
                    </Description>
                    <Hidden mdUp>
                        {
                            this.state.isLoadingCompany === false ?

                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                    onClick={() => { this.onChooseProfile('company') }}
                                >
                                    Soy una empresa
                                </Button>

                            :
                            <Lottie options={lottieDefaultOptions} height={50} width={50}/>   
                        }
                    </Hidden>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    md={6}
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={imCompany}
                        style={{
                            height: 'auto',
                            width: '100%',
                            maxWidth: '500px',
                            minHeight: '400px'
                        }}
                    />
                    <Description>
                        Soy un talento en busca de una empresa para mí o estoy interesado en mostrar mi proyecto
                    </Description>
                    <Hidden mdUp>
                        {
                            this.state.isLoadingTalent === false ?
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                    onClick={() => { this.onChooseProfile('talent') }}
                                >
                                    Soy un talento
                                </Button>
                            :
                                <Lottie options={lottieDefaultOptions} height={50} width={50}/>   
                        }
                    </Hidden>
                </Grid>
                <Hidden smDown>
                    <Grid 
                        item 
                        xs={false} 
                        md={6} 
                        style={{ textAlign: 'center' }}
                    >
                        {
                            this.state.isLoadingCompany === false ?

                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                    onClick={() => { this.onChooseProfile('company') }}
                                >
                                    Soy una empresa
                                </Button>

                            :
                            <Lottie options={lottieDefaultOptions} height={50} width={50}/>   
                        }
                    </Grid>
                    <Grid 
                        item 
                        xs={false} 
                        md={6} 
                        style={{ textAlign: 'center' }}
                    >
                        {
                            this.state.isLoadingTalent === false ?
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                    onClick={() => { this.onChooseProfile('talent') }}
                                >
                                    Soy un talento
                                </Button>
                            :
                                <Lottie options={lottieDefaultOptions} height={50} width={50}/>   
                        }
                    </Grid>
                </Hidden>
            </Grid>
        );
    }

    onRenderRegisterSuccesfull = () => {
        return(
            <Grid continer>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Button 
                        variant="contained"     
                        style={{
                            backgroundColor: primaryOrange,
                            color: 'white',
                            fontSize: '20px',
                            marginTop: '30px'
                        }}
                        onClick={() => { this.props.history.push({ pathname: '/', }) }}
                    >
                        Iniciar Sesión
                    </Button>
                </Grid>
            </Grid>
        )
    }
    

    render(){
        return(
            <Grid container>
                <SimpleHeader/>
                <Grid item xs={12}>
                   <CommonTitle>
                        {
                            this.state.registerSuccessfull ?
                                'Registro exitoso!'
                            :
                                'Antes de comenzar, cuéntanos qué buscas.'
                        }
                   </CommonTitle>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    autoHideDuration={this.state.duration}
                    open={this.state.isSnackbarOpen}
                    onClose={this.closeSnackbar}
                    message={this.state.message}
                />
                <Grid item xs={12}>
                    {
                        this.state.registerSuccessfull ?
                            this.onRenderRegisterSuccesfull()
                        :
                            this.onRenderChooseProfile()
                    }
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(ChooseProfileContainer);