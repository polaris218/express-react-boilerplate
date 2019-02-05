import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import muiStyles from '../assets/styles/ViewOffer';

const imgStyle = {
    width: '90%',
    height: '85%',
}

const zoomInStyle = {
    width: '80%',
    height: '90%'
}

const userStyle = {
    width: '70%',
    height: '90%',
}
class ViewOffer extends Component {
    
  constructor(props) {
      super(props);
  }
  render() { 
    const { classes } = this.props;
    return ( 
      <Paper className={classes.paper} square>
        <Grid container>
          <Grid item xs={12} md={6} container spacing={8} className={classes.photoContent}>
            <Grid item xs={12} container spacing={8}>
              <img
                src={require('../assets/img/dummy-test.jpg')}
                alt="dummyTest"
                style={imgStyle}
              >
              </img>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  <img
                    src={require('../assets/img/dummy-test.jpg')}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={require('../assets/img/dummy-test.jpg')}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={require('../assets/img/dummy-test.jpg')}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={11} container spacing={16} className={classes.offerContent}>
            <Grid item xs={11} className={classes.headtitle}>
              <span className={classes.title}>Title</span><br />
              <span className={classes.subtitle}>#0000000000</span>&nbsp;|&nbsp;Share:
                <i className="fa fa-facebook-official fa-fw iconColor"></i>
                <i className="fa fa-twitter-square fa-fw iconColor"></i>
                <i className="fa fa-envelope fa-fw iconColor"></i>
            {/* </Grid>
            <Grid item xs={2}> */}
              <i className="fa fa-star-o fa-3x star" aria-hidden="true"></i>
            </Grid>
            <Grid item xs={8}>
                <span>0.00</span><br />
                <Typography><span>0.00</span>&nbsp;0%&nbsp; OFF</Typography>
            </Grid>
            <Grid item xs={4} container>
                <Grid item xs>
                  <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                </Grid>
                <Grid item xs>
                    <span>Sales end:</span><br /><span>mm/dd/yyyy</span>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <span>Description</span><br />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam tempor orci ut quam molestie, 
                    at ullamcorper velit accumsan. Nulla facilisi.
                </span>
            </Grid>
            <Grid item md container className={classes.privacy}>
                <Grid item md={3}>
                  <img 
                    src={require('../assets/img/dummy-test.jpg')}
                    alt="user"
                    style={userStyle}
                  />
                </Grid>
                <Grid item md={9}>
                  <span>Name</span><span>unverified</span>
                  <br />
                  <span>+000 0000 0000</span>
                  <br />
                  <span>user@mail.com</span>
                </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid container item xs={12} spacing={24}>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.buyout}
                >
                    buyout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
 
export default withStyles(muiStyles)(ViewOffer);