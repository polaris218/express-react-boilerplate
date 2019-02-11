import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

import PaginationBar from './Category/PaginationBar';
import Offerlist from './Category/Offerlist';

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
});

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

  componentWillMount() {
    this.props.offerDataWatcher();
  }
  /**
   * @see https://www.npmjs.com/package/material-ui-flat-pagination
   * for pagination
   */
  render() { 
    const { classes, offerData } = this.props;
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
            {
              offerData.map((item, key) => (
                <Offerlist 
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  choosedate={item.choosedate}
                  offer_image={item.offer_image}
                />
              ))
            }
            {/* <Offerlist /> */}
          <Grid item md={1}></Grid>
          <PaginationBar />
        </Grid>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyle)(Home));