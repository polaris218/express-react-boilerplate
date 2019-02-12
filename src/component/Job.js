import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import muiStyles from '../assets/styles/press';

  const ExpansionPanel = withStyles({
    root: {
    //   borderBottom: '1px solid rgba(0,0,0,.125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 'auto',
    },
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.00)',
      borderBottom: '1px solid rgba(0,0,0,1)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(props => <MuiExpansionPanelSummary {...props} />);
  
  ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing.unit * 2,
    },
  }))(MuiExpansionPanelDetails);

  
class Job extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
        }
    }
    render() { 
        const { classes } = this.props;
        const { expanded } = this.state;
        return ( 
            <Paper className={classes.root}>
                <Typography className={classes.title} variant="h5" component="title">
                    Job
                </Typography>
                <Typography component="p" className={classes.article}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis maximus ligula. Sed maximus finibus quam elementum porta. Maecenas ullamcorper vehicula ipsum non ultricies. Maecenas cursus eros eget diam ultricies, eget tincidunt ipsum gravida. Etiam interdum, mi nec accumsan pharetra, diam lacus convallis lorem, eu rhoncus ligula ex non turpis. Aenean sit amet est non mi mattis cursus id sit amet mauris. Nunc ac vulputate nisi. Nulla facilisi.
                </Typography>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={() => this.setState({expanded: expanded ? 'panel1' : false})}
                >
                    <ExpansionPanelSummary>
                        <strong>Section 1</strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                        ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel2'}
                    onChange={() => this.setState({expanded: expanded ? 'panel2' : false})}
                >
                    <ExpansionPanelSummary>
                        <strong>Section 2</strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                        ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={() => this.setState({expanded: expanded ? 'panel3' : false})}
                >
                    <ExpansionPanelSummary>
                        <strong>Section 3</strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                        ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
         );
    }
}
 
export default withStyles(muiStyles)(Job);