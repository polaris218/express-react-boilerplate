import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { InputAdornment } from '@material-ui/core';

import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import muiStyle from '../assets/styles/createoffer';

const imgStyle = {
  width: '150px',
  height: '150px',
};

class CreateOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      category: '',
      title: '',
      description: '',
      startdate: '',
      enddate: '',
      fullprice: '',
      discount: '',
      address: '',
      phone: '',
      site: '',
      img:null,
      img1:null,
      img2:null,
      img3:null,
      imgpath: null,
      imgsubpath1: null,
      imgsubpath2: null,
      imgsubpath3: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData();
    const { 
      title,
      category,
      description,
      startdate,
      enddate,
      fullprice,
      discount,
      address,
      phone,
      site,
      img,
      img1,
      img2,
      img3,
    } = this.state;
    // console.log(this.state);
    formdata.append('title', title);
    formdata.append('category', category);
    formdata.append('description', description);
    formdata.append('startdate', startdate);
    formdata.append('enddate', enddate);
    formdata.append('fullprice', fullprice);
    formdata.append('discount', discount);
    formdata.append('address', address);
    formdata.append('phone', phone);
    formdata.append('site', site);
    formdata.append('file', img);
    formdata.append('file', img1);
    formdata.append('file', img2);
    formdata.append('file', img3);
    
    this.props.privacyWatcher(formdata);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleUpload(event) {
    if(event.target.files[0] !=null ) {
      this.setState({
        [event.target.name]: URL.createObjectURL(event.target.files[0]),
      });
      // const { imgpath, imgsubpath1, imgsubpath2, imgsubpath3 } = this.state;
      console.log(event.target.name);
      switch(event.target.name) {
        case "imgpath":
          this.setState({
            img: event.target.files[0],
          });
        break;
        case "imgsubpath1":
          this.setState({
            img1: event.target.files[0],
          });
        break;
        case "imgsubpath2":
          this.setState({
            img2: event.target.files[0],
          });
        break;
        case "imgsubpath3":
          this.setState({
            img3: event.target.files[0],
          });
        break;
        default:
        break;
      }
    }
  }
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
            <form onSubmit={this.handleSubmit}>
              <Grid item container spacing={16} className={classes.offercontent}>
                <Grid item xs={4} container className={classes.offerphoto} spacing={16}>
                  {/* <label className={classes.imageLabelUpload}> */}
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      name="imgpath"
                      onChange={ this.handleUpload }
                      ref={(fileInput1) => { this.fileInput1=fileInput1; }}
                    />
                    <img
                      src={ this.state.imgpath ? this.state.imgpath : require('../assets/img/addphoto.gif')}
                      alt="upload"
                      style ={ imgStyle }
                      onClick={() => this.fileInput1.click()}
                    />
                  {/* </label>
                  <label className={classes.imageLabel}> */}
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      name="imgsubpath1"
                      onChange={ this.handleUpload }
                      ref={(fileInput2) => { this.fileInput2=fileInput2; }}
                    />
                    <img
                      src={ this.state.imgsubpath1 ? this.state.imgsubpath1 : require('../assets/img/addphoto.gif')}
                      alt="upload"
                      style={ imgStyle }
                      onClick={() => this.fileInput2.click()}
                    />
                  {/* </label>
                  <label className={classes.imageLabelUpload}> */}
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      name="imgsubpath2"
                      onChange={this.handleUpload}
                      ref={(fileInput3) => { this.fileInput3=fileInput3; }}
                    />
                    <img
                      src={ this.state.imgsubpath2 ? this.state.imgsubpath2 : require('../assets/img/addphoto.gif')}
                      alt="upload"
                      style={ imgStyle }
                      onClick={() => this.fileInput3.click()}
                    />
                  {/* </label>
                  <label className={classes.imageLabel}> */}
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      name="imgsubpath3"
                      onChange={this.handleUpload}
                      ref={(fileInput4) => { this.fileInput4=fileInput4; }}
                    />
                    <img
                      src={ this.state.imgsubpath3 ? this.state.imgsubpath3 : require('../assets/img/addphoto.gif')}
                      alt="upload"
                      style={ imgStyle }
                      onClick={() => this.fileInput4.click()}
                    />
                  {/* </label> */}
                </Grid>
                <Grid item xs={7} className={classes.offerdesc}>
                  <InputBase 
                    className={classes.title}
                    placeholder="Title"
                    name="title"
                    fullWidth
                    onChange={this.handleChange}
                  >
                  </InputBase>
                  <InputBase 
                    className={classes.description}
                    placeholder="Description"
                    name="description"
                    rows='10'
                    fullWidth
                    multiline
                    onChange={this.handleChange}
                  >
                  </InputBase>
                  <Typography align='right' variant="overline">
                    30 - 100
                  </Typography>
                  <span className={classes.date}>Choose Date:</span>
                  <TextField
                  id="date"
                  type="date"
                  name="startdate"
                  className={classes.startDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={event => this.setState({ startdate: event.target.value})}
                  >
                  </TextField>
                  <span className={classes.date}>To:</span>
                  <TextField
                    id="date"
                    type="date"
                    name="enddate"
                    className={classes.startDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={event => this.setState({ enddate: event.target.value})}
                  >
                  </TextField>
                  <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Don't show a date"
                  />
                  <Grid>
                    <span className={classes.date}>Full Price:</span>
                    <TextField
                      className={classes.price}
                      name="fullprice"
                      InputProps={{
                        startAdornment:<InputAdornment position="start">$</InputAdornment>
                      }}
                      onChange={this.handleChange}
                    >
                    </TextField>
                    <span className={classes.date}>Discount:</span>
                    <TextField
                      className={classes.price}
                      name="discount"
                      InputProps={{
                        startAdornment:<InputAdornment position="start">%</InputAdornment>
                      }}
                      onChange={this.handleChange}
                    >
                    </TextField>
                  </Grid>
                  <Grid>
                    <span className={classes.date}>Select the Category</span>
                    <FormControl className={classes.formCategory}>
                      <InputLabel htmlFor="category-to-be-selected">Category to be selected</InputLabel>
                      <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.category}
                        onChange={this.handleChange}
                        name="category"
                        inputProps={{
                          name: 'category',
                          id: 'category-to-be-selected'
                        }}
                      >
                        <MenuItem value={10}>Audi</MenuItem>
                        <MenuItem value={20}>BWM</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <InputBase 
                    className={classes.addrPhoneSite}
                    placeholder="Address"
                    name="address"
                    fullWidth
                    onChange={this.handleChange}
                  >
                  </InputBase>
                  <InputBase 
                      className={classes.addrPhoneSite}
                      name="phone"
                      placeholder="Phone"
                      fullWidth
                      onChange={this.handleChange}
                    >
                  </InputBase>
                  <InputBase 
                      className={classes.addrPhoneSite}
                      name="site"
                      placeholder="Site"
                      fullWidth
                      onChange={this.handleChange}
                    >
                  </InputBase>
                  <Button
                      type="submit"
                      variant="contained"
                      className={classes.proceed}
                    >
                      Proceed
                  </Button>
                </Grid>  
              </Grid>
            </form>
          </Grid>
        </Paper>
      );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyle)(CreateOffer));