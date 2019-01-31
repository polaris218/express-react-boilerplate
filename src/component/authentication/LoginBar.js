import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
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
                    <Button
                        type="button"
                        variant="extendedFab"
                        className={classes.loginButton}
                    >
                    Log In
                    </Button>
                </Link>
                <Link 
                    component={RouterLink} 
                    to="/signup"
                    underline="none"
                >
                    <Button
                        type="button"
                        variant="extendedFab"
                        className={classes.loginButton}
                    >
                    Sing Up
                    </Button>
                </Link>
            </div>
         );
    }
}
 
export default withStyles(mutStyle)(LoginBar);