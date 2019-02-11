import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

    /**
     * @see https://medium.com/@colinrlly/send-store-and-show-images-with-react-express-and-mongodb-592bc38a9ed
     * Article for mongoose binary data to Image
     */
    const { offer_image } = this.props;
    const buffer = offer_image.mainphoto.data.data;
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary +=String.fromCharCode(b));
    const imgStr = window.btoa(binary);
    const base64Flag = 'data:image/png;base64,';

    this.state = {
      anchorEl: null,
      mainphoto: base64Flag + imgStr,
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
                src={this.state.mainphoto}
                style={imgStyles.imgStyle} 
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs md={12}>
                <Typography gutterBottom variant="subtitle1">
                  {this.props.title}
                </Typography>
                <Typography className={classes.offerdesc} gutterBottom variant="h5">
                  {this.props.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.date}>
              {this.props.choosedate.from}
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
                  <MenuItem 
                    key={option} 
                    component={RouterLink} 
                    onClick={this.handleClose}
                    to={`/${option}`}
                  >
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