import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import { primaryOrange } from '../../utils/colors';
import whiteLogo from '../../assets/white-logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Didact Gothic',
    fontWeight: 600,
    fontSize: '50px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: primaryOrange}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img 
                src={whiteLogo}
                style={{
                    height: 'auto',
                    width: '70px'
                }}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            JaScope
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}