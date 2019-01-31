import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';

const mutStyle = theme => ({
    loginButton: {
        marginTop: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 3,
        fontWeight: 500,
        backgroundColor: '#20326b',
        color: '#ffffff',
    },
    link: {
        textDecoration: 'none',
    }
})
class LoginBar extends Component {
    
    render() { 
        const { classes } = this.props
        return ( 
            <div>
                <Link 
                    component={RouterLink} 
                    to="/login" 
                    underline="none"
                >
                    <Fab
                        type="button"
                        variant="extended"
                        className={classes.loginButton}
                    >
                    Log In
                    </Fab>
                </Link>
                <Link 
                    component={RouterLink} 
                    to="/signup"
                    underline="none"
                >
                    <Fab
                        type="button"
                        variant="extended"
                        className={classes.loginButton}
                    >
                    Sign Up
                    </Fab>
                </Link>
            </div>
         );
    }
}
 
export default withStyles(mutStyle)(LoginBar);