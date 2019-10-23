import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Image, Navbar, Tabs, Tab, TabContainer} from 'react-bootstrap';

class Certifications extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
            <p>You currently have no skills to add certifications under.
                <br/>
                <br/>
                Please go back to the Skills tab to add some of your skills and interests.</p>
            </div>
        )
    }

}

export default Certifications;