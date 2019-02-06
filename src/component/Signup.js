import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import muiStyles from '../assets/styles/authentication';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            confirm: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit(event) {
        event.preventDefault();
        const { username, email, password } = this.state;
        this.props.signupWatcher({
            username, email, password
        });
    };
    componentWillReceiveProps(props) {
        props.token && props.history.push('/viewoffer');
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
                        id="username"
                        name="username"
                        label="Business name"
                        className={classes.text}
                        autoFocus
                        required
                        onChange={this.handleChange}
                        >
                        </TextField>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <TextField
                        variant="outlined"
                        id="email"
                        name="email"
                        label="Business email"
                        className={classes.text}
                        autoComplete="email"
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
                        onChange={this.handleChange}
                        required
                      >

                      </TextField>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <TextField
                        variant="outlined"
                        type="password"
                        id="confirm"
                        name="confirm"
                        label="confirm"
                        className={classes.text}
                        required
                        onChange={this.handleChange}
                      >

                      </TextField>
                    </FormControl>
                    <FormControl>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={this.handleChange}
                        >
                        </input>
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            component="span"
                          >
                            upload
                            <CloudUploadIcon />
                          </Button>
                        </label>
                    </FormControl>
                    <Typography
                        align="center"
                    >
                        By creating an account, you agree to Offer Brite's<br/>
                        <Link component={RouterLink} to="#">
                            User Agreement and Privacy Notice.
                        </Link>
                    </Typography>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.submit}
                    >
                      Proceed
                    </Button>
                  </form>
                </Paper>
            </main>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(Signup));