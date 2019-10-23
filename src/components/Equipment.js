import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Image, Navbar, Tabs, Tab, TabContainer} from 'react-bootstrap';

class Equipment extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return (
            <h1>Equipment Tab is here!</h1>
        )
    }

}
export default Equipment;

// export default connect(mapStateToProps,{fetchMaterials, addMaterial})(Equipment);