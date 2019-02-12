import React, { Component } from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typograhpy from '@material-ui/core/Typography';

// import GoogleMap from './GoogleMap';
import muiStyle from '../assets/styles/Bottom';

class Bottom extends Component {
    
  render() { 
      const { classes } = this.props;
    return ( 
      <Paper className={classes.paper} square>
        
        <Grid container>
          <Grid item xs={12}>
            <Button
            type="button"
            className={classes.backtotop}
            fullWidth
            >
            back to Top
            </Button>
          </Grid>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Typograhpy
                  className={classes.aboutus}
                >
                  About Us
                </Typograhpy>
                <Link 
                  component={RouterLink} 
                  to="/story"
                  underline='none'
                >
                  <Typograhpy
                    className={classes.article}
                    component="p"
                  >
                    Story
                  </Typograhpy>
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/useragreement"
                  underline="none"
                >
                  <Typograhpy
                    className={classes.article}
                  >
                    User Agreement
                  </Typograhpy>
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/privacypolicy"
                  underline="none"
                >
                  <Typograhpy
                    className={classes.article}
                  >
                    Privacy Policy
                  </Typograhpy>
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/press"
                  underline="none"
                >
                  <Typograhpy
                    className={classes.article}
                  >
                    Press
                  </Typograhpy>
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/jobs"
                  underline="none"
                >
                  <Typograhpy
                    className={classes.article}
                  >
                    Jobs
                  </Typograhpy>
                </Link>
              </div>
              <div className="col-md-4">
              <Typograhpy
                className={classes.aboutus}
              >
                For more information
              </Typograhpy>
              <Link 
                component={RouterLink} 
                to="/contactus"
                underline='none'
              >
                <Typograhpy
                  className={classes.article}
                >
                  Contact Us
                </Typograhpy>
              </Link>
              <Typograhpy
                  className={classes.article}
              >
                  +000 0000 0000
              </Typograhpy>
              </div>
            </div>
          {/* 
          <Grid item md={6}>
            <GoogleMap />
          </Grid> */}
          </div>
          <Grid item xs={12}>
            <Typograhpy
              className={classes.summary}
              variant="h6"
              align="center"
            >
              Prices and offers are subject to change. &copy;2019 OFFER BRITE. All rights reserved.
            </Typograhpy>
          </Grid>
        </Grid>
      </Paper>      
    );
  }
}
 
export default withStyles(muiStyle)(Bottom);