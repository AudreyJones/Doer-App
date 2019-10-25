import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {Container} from 'react-bootstrap';

class Certifications extends Component {
    constructor(props){
    super(props);
        this.state = {
            name:'',
            category_ids:[],
            equipment: []

        }
    }
    render(){
        return (
            <div>
            <br/>
                <Container fluid>
                    <p>You currently have no skills to add certifications under.
                        <br/>
                        <br/>
                    Please go back to the Skills tab to add some of your skills and interests.</p>
                </Container>
            </div>
        )
    }

}

export default Certifications;