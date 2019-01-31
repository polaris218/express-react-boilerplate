import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import muiStyle from '../assets/styles/googlemap';

class GoogleMap extends Component {

  render() {
    const { classes } = this.props;
    return ( 
      <main className={classes.main}>
        
      </main>
    );
  }
}
 
export default withStyles(muiStyle)(GoogleMap);