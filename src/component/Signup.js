import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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


import muiStyles from '../assets/styles/authentication';
import Offerbrite from '../assets/img/offer_brite-blue.png';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            confirm: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind();
        this.handleSubmit = this.handleSubmit.bind();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
            return ( 
                <main className={classes.main}>
                <CssBaseline />
                  <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                      <img
                      className={classes.img}
                      src={Offerbrite} 
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
                        id="name"
                        name="name"
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
                        // onChange={this.handleChange}
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
                        >
                        </input>
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            component="span"
                          >
                            upload
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
 
export default withStyles(muiStyles)(Signup);