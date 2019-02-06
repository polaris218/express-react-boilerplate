import React, { Component } from 'react';
import Pagination from 'material-ui-flat-pagination';

class PaginationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(offset) {
        this.setState({offset})
    }
    render() { 
        // const { classes } = this.props;
        return ( 
            <Pagination
                limit={20}
                offset={this.state.offset}
                total={100}
                centerRipple
                disableFocusRipple
                previousPageLabel="Back"
                nextPageLabel="Next"
                currentPageColor="default"
                onClick={(e, offset) => this.handleClick(offset)}
            />
        );
    }
}
 
export default PaginationBar;