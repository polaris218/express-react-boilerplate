import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import muiStyle from '../assets/styles/createoffer';
import AddPhoto from '../assets/img/addphoto.gif';

class CreateOffer extends Component {
    
  render() {
    const { classes } = this.props;
      return (
        <Paper className={ classes.paper } square>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3">
                  Create Offer
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="headline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed quis maximus ligula. Sed maximus finibus quam elementum 
                porta. Maecenas ullamcorper vehicula ipsum non ultricies.
              </Typography>
            </Grid>
            <Grid item container spacing={10} className={classes.offercontent}>
              <Grid item xs={4} className={classes.offerphoto} spacing={15}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="text-button-file"
                  multiple
                  type="file"
                />

                {/* <Button component="img" className={classes.button}> */}
                    <img
                    htmlFor="text-button-file"
                    src={AddPhoto}
                    alt="upload"
                    />
                {/* </Button>                 */}
                <img
                  src={AddPhoto}
                  alt="upload"
                />
                <img
                  src={AddPhoto}
                  alt="upload"
                />
                <img
                  src={AddPhoto}
                  alt="upload"
                />
              </Grid>
              <Grid item xs={8} className={classes.offerdesc}>
                    8
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
  }
}
 
export default withStyles(muiStyle)(CreateOffer);