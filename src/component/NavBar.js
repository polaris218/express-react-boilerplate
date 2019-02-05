import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';

import LoginBar from './authentication/LoginBar';
import muiStyles from '../assets/styles/NavBar';

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
                            src={require('../assets/img/offer_brite-white.png')} 
                            alt="logo" 
                            className={classes.img}
                            style={styles.imgStyle}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <div className={classes.search}>
                          <Link 
                            component={RouterLink} 
                            to="/createoffer"
                            underline='none'
                            >
                            <Button 
                                    type="submit"
                                    variant="contained"
                                    className={classes.addoffer}
                                >
                                +Add Offer
                                </Button>
                          </Link>
                            <div className={classes.searchbar}>
                                <div className={classes.iconButton}>
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