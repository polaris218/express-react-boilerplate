import React, { Component } from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typograhpy from '@material-ui/core/Typography';

import GoogleMap from './GoogleMap';
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
          <Grid 
            item md={3} 
            container 
            spacing={16}
            className={ classes.grid }
          >
            <Typograhpy
              className={classes.aboutus}
            >
              About Us
            </Typograhpy>
            <br />
            <Link 
              component={RouterLink} 
              to="/story"
              underline="none"
            >
              <Typograhpy
                className={classes.article}
              >
                Story
              </Typograhpy>
            </Link>
            <br />
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
            <br />
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
            <br />
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
            <br />
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
          </Grid>
          <Grid item md={3}>
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
          </Grid>
          <Grid item md={6}>
            <GoogleMap />
          </Grid>
        </Grid>        
      </Paper>      
    );
  }
}
 
export default withStyles(muiStyle)(Bottom);