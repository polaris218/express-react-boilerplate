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

import LoginBar from './authentication/LoginBar';
import muiStyles from '../assets/styles/NavBar';
import Logo from '../assets/img/offer_brite-white.png';



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
                        <LoginBar />
                    </Grid>
                </Grid>
            </Paper>
            
         );
    }
}
 
export default withStyles(muiStyles)(NavBar);