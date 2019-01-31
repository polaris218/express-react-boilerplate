import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            confirm: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind();
        this.handleSubmit = this.handleSubmit.bind();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { classes } = this.props
        return ( 
            <main>

            </main>
         );
    }
}
 
export default Signup;