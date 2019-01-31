import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../assets/img/offer_brite-white.png';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

const muiStyles = theme => ({
    main: {
        width: 'auto',
    },
    paper: {
        backgroundColor: '#20326b',
    },
    img: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    addoffer: {
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 5,
        backgroundColor: '#ff9c02',
        borderRadius: '20px',
        padding: '15px',
    },
    search: {
        display: 'flex',
        justify: 'center',
        marginTop: theme.spacing.unit * 6,
    },
    searchbar: {
        display: 'flex',
        border: '0px',
        borderRadius: '20px',
        borderStyle: 'solid',
        backgroundColor: '#19295b',
    },
    searchInput: {
        flex: 1,
        color: '#838aa4',
        fontSize: '20px',
        paddingLeft: theme.spacing.unit * 2,
        width: theme.spacing.unit * 45,
    },
    iconButton: {
        display: 'flex',
        padding: 5,
        marginTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 2,
        color: '#838aa4',
    },
    loginButton: {
        marginTop: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 3,
        color: '#838aa4',
    }
})

const styles ={
    imgStyle: {
        width: '130px',
        height: '120px',
        float: 'right',
    },
};

class NavBar extends Component {
    
    render() { 
        const { classes } = this.props;
        return (
            <Paper className={classes.paper} square>
                <Grid container>
                    <Grid item md={3}>
                        <img 
                            src={Logo} 
                            alt="logo" 
                            className={classes.img}
                            style={styles.imgStyle}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <div className={classes.search}>
                            <Button 
                                type="submit"
                                variant="contained"
                                className={classes.addoffer}
                            >
                            Add Offer
                            </Button>
                            <div className={classes.searchbar}>
                                <div className={classes.iconButton} square>
                                    <SearchIcon />
                                </div>
                                <InputBase 
                                    className={classes.searchInput} 
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <Button
                            type="button"
                            variant="extendedFab"
                            className={classes.loginButton}
                        >
                        Log In
                        </Button>
                        <Button
                            type="button"
                            variant="extendedFab"
                            className={classes.loginButton}
                        >
                        Sing Up
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
         );
    }
}
 
export default withStyles(muiStyles)(NavBar);