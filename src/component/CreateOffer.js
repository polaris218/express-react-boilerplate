import React, { Component } from 'react';
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

import muiStyle from '../assets/styles/createoffer';


const options = [
  'Category to be selected',
  'Audi',
  'BWM',
];

class CreateOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      category: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
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
            <form >
              <Grid item container spacing={16} className={classes.offercontent}>
                <Grid item xs={4} container className={classes.offerphoto} spacing={16}>
                  <label htmlFor="contained-button-file" className={classes.imageLabelUpload}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <img
                      src={require('../assets/img/addphoto.gif')}
                      alt="upload"
                    />
                  </label>
                  <label htmlFor="contained-button-file" className={classes.imageLabel}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <img
                      src={require('../assets/img/addphoto.gif')}
                      alt="upload"
                    />
                  </label>
                  <label htmlFor="contained-button-file" className={classes.imageLabelUpload}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <img
                      src={require('../assets/img/addphoto.gif')}
                      alt="upload"
                    />
                  </label>
                  <label htmlFor="contained-button-file" className={classes.imageLabel}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <img
                      src={require('../assets/img/addphoto.gif')}
                      alt="upload"
                    />
                  </label>
                </Grid>
                <Grid item xs={7} className={classes.offerdesc}>
                  <InputBase 
                    className={classes.title}
                    placeholder="Title"
                    fullWidth
                    onChange={this.handleChange}
                  >
                  </InputBase>
                  <InputBase 
                    className={classes.description}
                    placeholder="Description"
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
                  className={classes.startDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  >
                  </TextField>
                  <span className={classes.date}>To:</span>
                  <TextField
                    id="date"
                    type="date"
                    
                    className={classes.startDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                      InputProps={{
                        startAdornment:<InputAdornment position="start">$</InputAdornment>
                      }}
                    >
                    </TextField>
                    <span className={classes.date}>Discount:</span>
                    <TextField
                      className={classes.price}
                      InputProps={{
                        startAdornment:<InputAdornment position="start">%</InputAdornment>
                      }}
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
                    fullWidth
                    onChange={this.handleChange}
                  >
                  </InputBase>
                  <InputBase 
                      className={classes.addrPhoneSite}
                      placeholder="Phone"
                      fullWidth
                      onChange={this.handleChange}
                    >
                  </InputBase>
                  <InputBase 
                      className={classes.addrPhoneSite}
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
 
export default withStyles(muiStyle)(CreateOffer);