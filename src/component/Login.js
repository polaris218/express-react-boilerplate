import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import muiStyles from '../assets/styles/authentication';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.loginWatcher({
          email, password,
        });
    }

    componentWillReceiveProps(props) {
      props.token ? props.history.push('/') : props.history.push('/login');
    }
    render() { 
        const { classes } = this.props;
            return ( 
                <main className={classes.main}>
                <CssBaseline />
                  <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                      <img
                      className={classes.img}
                      src={require('../assets/img/offer_brite-blue.png')} 
                      alt="offerbrite" 
                      />
                  </Grid>
                  
                <Paper className={classes.paper}>
                  <Typography
                    className={classes.signIn}
                    component="h1" 
                    variant="h3"
                  >
                    Create account
                  </Typography>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                    <TextField
                      variant="outlined"
                      id="email"
                      name="email"
                      label="Email Address"
                      className={classes.text}
                      autoComplete="email"
                      autoFocus
                      required
                      onChange={this.handleChange}
                    >
                    </TextField>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <TextField
                        variant="outlined"
                        type="password"
                        id="password"
                        name="password"
                        label="password"
                        className={classes.text}
                        required
                        onChange={this.handleChange}
                      >

                      </TextField>
                    </FormControl>
                    <Link component={RouterLink} to="#">
                      Forget password?<br/>
                    </Link>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.submit}
                    >
                      Sign in
                    </Button>
                  </form>
                </Paper>
              </main>
            );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(Login));