import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import muiStyle from '../../assets/styles/card';
import dummyTest from '../../assets/img/dummy-test.jpg';

const imgStyles = {
  imgStyle: {
      width: '180px',
      height: '181px',
      // float: 'right',
  },
};

const options = [
  'ViewOffer',
  'Analytics',
  'EditOffer',
  'Delete',
];

const ITEM_HEIGHT = 48;

class ViewOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <Card
        className={ classes.card }
        square
        >
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img 
                className={classes.img} 
                alt="complex" 
                src={dummyTest}
                style={imgStyles.imgStyle} 
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs md={12}>
                <Typography gutterBottom variant="subtitle1">
                  #0000000000
                </Typography>
                <Typography className={classes.offerdesc} gutterBottom variant="h5">
                  LED TV Backlights,Govee WiFi Dreamcolor TV Lights Kit with Camera, 
                  8.5 Ft TV Led Strip Lights, Neon TV Ambient Bias Lighting for 55"-80" TV
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.date}>
              MM/DD/YYYY
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconbutton}
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 'auto',
                },
              }}
            >
              {
                options.map(option => (
                  <MenuItem key={option} onClick={this.handleClose}>
                    {option}
                  </MenuItem>
                ))
              }
            </Menu>
          </Grid>
        </Grid>
      </Card>   
      </div>   
    );
  }
}
 
export default withStyles(muiStyle)(ViewOffer);