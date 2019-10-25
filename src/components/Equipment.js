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
            {/* Show empty equipment Tab message, unless a SubCategory's checkbox was changed, in which case state is updated and the subcategory's equipment formatted into cards with checkboxes here! */}
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