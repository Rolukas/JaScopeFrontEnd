import { Grid, Button} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SimpleHeader from '../../Common/SimpleHeader';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';

// Assets
import imTalent from '../../../assets/im-talent.svg';
import imCompany from '../../../assets/im-company.svg';
import { primaryOrange } from '../../../utils/colors';

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

    render(){
        return(
            <Grid container>
                <SimpleHeader/>
                <Grid item xs={12}>
                   <CommonTitle>
                       Antes de comenzar, cuéntanos qué buscas.
                   </CommonTitle>
                </Grid>
                <Grid item xs={12}>
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
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                >
                                    Soy una empresa
                                </Button>
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
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px',
                                        marginBottom: '60px'
                                    }}
                                >
                                    Soy un talento
                                </Button>
                            </Hidden>
                        </Grid>
                        <Hidden smDown>
                            <Grid 
                                item 
                                xs={false} 
                                md={6} 
                                style={{ textAlign: 'center' }}
                            >
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px'
                                    }}
                                >
                                    Soy una empresa
                                </Button>
                            </Grid>
                            <Grid 
                                item 
                                xs={false} 
                                md={6} 
                                style={{ textAlign: 'center' }}
                            >
                                <Button 
                                    variant="contained"     
                                    style={{
                                        backgroundColor: primaryOrange,
                                        color: 'white',
                                        fontSize: '20px',
                                        marginTop: '30px'
                                    }}
                                >
                                    Soy un talento
                                </Button>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(ChooseProfileContainer);