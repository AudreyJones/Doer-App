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
        <div>
            {/* If state.skills is empty, then phrase should appear: "You currently have no skills to add equipment under. Please go back to the Skills tab to add some of your skills and interests." */}
            <p>You currently have no skills to add equipment under.
                <br/>
                <br/>
                Please go back to the Skills tab to add some of your skills and interests.</p>
        </div>
        )
    }

}
export default Equipment;

// export default connect(mapStateToProps,{fetchMaterials, addMaterial})(Equipment);