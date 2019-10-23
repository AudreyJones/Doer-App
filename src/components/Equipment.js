import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {Container} from 'react-bootstrap';

class Equipment extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return (
        <div>
            <br/>
            <Container fluid>
            
                <p>You currently have no skills to add equipment under.
                    <br/>
                    <br/>
                Please go back to the Skills tab to add some of your skills and interests.</p>
            </Container>
        </div>
        )
    }

}
export default Equipment;

// export default connect(mapStateToProps,{fetchMaterials, addMaterial})(Equipment);