import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import muiStyles from '../assets/styles/ViewOffer';

const imgStyle = {
    width: 400,
    height: 500,
}
// const tinyStyle = {
//   width: ''
// }
const zoomInStyle = {
    width: 130,
    height: 130
}
class ViewOffer extends Component {
  
  constructor(props) {
    super(props);
    this.handleBufferToImage = this.handleBufferToImage.bind(this);
    this.state = {
      mainphoto: null,
      subphoto1: null,
      subphoto2: null,
      subphoto3: null,
    };
  }

  componentWillMount() {
    const { offerid } = this.props.match.params;
    this.props.getOfferViewWatcher(offerid);
  }

  componentWillReceiveProps(props) {
    const { 
      title,
      description,
      offer_image,
      offerId,
      created_date,
      phone,
      user,
      choosedate,
      discount,
      fullprice,
     } = props.viewData;
    const { 
      mainphoto,
      subphoto1,
      subphoto2,
      subphoto3,
    } = offer_image;
    const { to } = choosedate;
    this.setState({
      mainphoto: this.handleBufferToImage(mainphoto.data.data),
      subphoto1: this.handleBufferToImage(subphoto1.data.data),
      subphoto2: this.handleBufferToImage(subphoto2.data.data),
      subphoto3: this.handleBufferToImage(subphoto3.data.data),
      title,
      description,
      offerId,
      created_date,
      phone,
      user,
      to,
      discount,
      fullprice,
    });
    console.log(props.viewData.choosedate);
  }

  handleBufferToImage(buffer) {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary +=String.fromCharCode(b));
    const imgStr = window.btoa(binary);
    const base64Flag = 'data:image/png;base64,';
    return base64Flag + imgStr;
  }
  render() { 
    const { classes } = this.props;
    return ( 
      <Paper className={classes.paper} square>
        <Grid container>
          <Grid item xs={12} md={6} container spacing={8} className={classes.photoContent}>
            <Grid item xs={12} container spacing={8}>
              <img
                src={this.state.mainphoto}
                alt="dummyTest"
                style={imgStyle}
              >
              </img>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  <img
                    src={this.state.subphoto1}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={this.state.subphoto2}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={this.state.subphoto3}
                    alt="dummyTest"
                    style={zoomInStyle}
                  >
                  </img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item md={6} xs={11} container spacing={16} className={classes.offerContent}> */}
            <div className="col-md-5 offer-intro">
              <div className="row offer-subtitle">
                <div className="col-md-9">
                  <h2 className="viewoffer-title">{this.state.title}</h2>
                  <span className="offer-subtitle-bottom">{this.state.offerId}</span>|<span><strong>Share:</strong></span>
                  <i className="fa fa-facebook-official fa-fw iconColor"></i>
                  <i className="fa fa-twitter-square fa-fw iconColor"></i>
                  <i className="fa fa-envelope fa-fw iconColor"></i>
                </div>
                <div className="col-md-3">
                  <i className="fa fa-star-o fa-3x star"></i>
                </div>
              </div>
              <hr/>
              <div className="row offer-price">
                <div className="col-md-8">
                  <label className="offer-old-price">{this.state.fullprice}</label>
                  <span className="offer-new-price">0.00</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="offer-discount-value">{this.state.discount}%</span>
                  <span className="offer-discount">off</span>
                </div>
                <div className="col-md-3 offer-salestime">
                  <div className="row">
                    <i className="fa fa-clock-o fa-2x clock"></i>
                    <span>
                      <strong>Sales end:<br></br></strong>
                      <em>{this.state.to}</em>
                    </span>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="row offer-description">
                <div className="col-md-12">
                  <h5>Description</h5>
                  <label>
                    {this.state.description}
                  </label>
                </div>
              </div>
              <div className="row offer-user-info">
                <div className="col-md-2 offset-md-1 user-image">
                  <img
                    src={require('../assets/img/user.png')}
                    alt="User"
                  />
                  {/*  */}
                </div>
                <div className="col-md-5 user-info">
                  <span>
                    <strong>Name</strong><small><strong>unverified</strong></small><br></br>
                    <span>{this.state.phone}</span><br></br>
                    <span className="user-mail">{this.state.user}</span>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="buyout"
              >
                buy Out
              </button>
            </div>
          {/* </Grid> */}
        </Grid>
      </Paper>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(ViewOffer));