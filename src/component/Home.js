import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PaginationBar from './Category/PaginationBar';
import ViewOffer from './Category/ViewOffer';
import Image from '../assets/img/dummy-test.jpg';

const muiStyle = theme => ({
    products: {
        display: 'inline-block',
    },
    pagination: {
        margin: 'auto',
    },
    root: {
        margin: 'auto',
        width: '60%',
    }
})

class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(offset) {
    this.setState({offset})
  }
  render() { 
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item md={5}>
            <Typography component="h3" variant="h6">
                Products
            </Typography>
          </Grid>
          
          <Grid item md={6}>
            <PaginationBar />
          </Grid>
          <Grid item md={1}></Grid>
            <ViewOffer />
            <ViewOffer />
          <Grid item md={1}></Grid>
          <PaginationBar />
        </Grid>
      </div>
    );
  }
}
 
export default withStyles(muiStyle)(Home);