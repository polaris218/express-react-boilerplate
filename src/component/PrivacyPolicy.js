import React, { Component } from 'react';
import withStyls from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import muiStyles from '../assets/styles/articles';

class PrivacyPolicy extends Component {
    
    render() { 
        const { classes } = this.props
        return ( 
            <Paper className={classes.root} elevation={1} square>
                <Typography className={classes.title} variant="h5" component="title">
                    Privacy Policy
                </Typography>
                <Typography component="p" className={classes.article}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis maximus ligula. Sed maximus finibus quam elementum porta. Maecenas ullamcorper vehicula ipsum non ultricies. Maecenas cursus eros eget diam ultricies, eget tincidunt ipsum gravida. Etiam interdum, mi nec accumsan pharetra, diam lacus convallis lorem, eu rhoncus ligula ex non turpis. Aenean sit amet est non mi mattis cursus id sit amet mauris. Nunc ac vulputate nisi. Nulla facilisi.
                </Typography>
                <Typography component="p" className={classes.article}>
                  Duis mollis vulputate eros, a ullamcorper tellus cursus et. Nulla eros mauris, gravida volutpat commodo ut, viverra vitae augue. Nam aliquet, magna sed egestas feugiat, elit eros bibendum ipsum, sed fermentum leo dui quis purus. Fusce fermentum, nulla vitae commodo luctus, purus metus auctor metus, in suscipit arcu dui eu dolor. Vestibulum pretium quam a tellus suscipit euismod. Vivamus placerat tempor lacus. Integer quis bibendum enim, sed feugiat massa. Aliquam dui odio, congue eget magna nec, dignissim fermentum nisl. Nulla facilisi.
                </Typography>
                <Typography component="p" className={classes.article}>
                  Integer rutrum metus et eros rhoncus, eu maximus sem tincidunt. Sed elementum mi at lacus fringilla, vel blandit nisl ultricies. Nulla congue id urna nec luctus. Nunc aliquam vulputate ante, in luctus odio placerat vel. Donec vehicula sagittis felis in faucibus. Nam tincidunt tellus quis felis rhoncus, ut gravida mi posuere. Mauris odio felis, tincidunt vel ex vitae, sodales pulvinar est. Phasellus ut ante efficitur, condimentum ex ut, semper metus.
                </Typography>
                <Typography component="p" className={classes.article}>
                  Ut finibus purus ligula, vitae commodo urna interdum vel. Pellentesque auctor faucibus tristique. Vivamus quam massa, egestas nec augue id, tincidunt mattis velit. Pellentesque augue ante, tempus mollis mollis in, condimentum nec sem. Sed facilisis quam quis ligula sodales, sit amet malesuada justo tristique. Pellentesque ex mauris, molestie accumsan fermentum in, vehicula at purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quam massa, egestas nec augue id, tincidunt mattis velit. Pellentesque augue ante, tempus mollis mollis in, condimentum nec sem. Sed facilisis quam quis ligula sodales, sit amet malesuada justo tristique. Pellentesque ex mauris, molestie accumsan fermentum in, vehicula at purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </Typography>
            </Paper>
         );
    }
}
 
export default withStyls(muiStyles)(PrivacyPolicy);