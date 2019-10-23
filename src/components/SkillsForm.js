import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Accordion, Collapse, Card, Button, Form} from 'react-bootstrap';
// import customToggle from './helpers/customToggle'
  


class SkillsForm extends Component {
    constructor() {
        super();
        this.state = {
            skills: []

        }
    }

    render(){
        return (
            <div>
                <Form>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Form.Check} variant="link" eventKey="0" label="Warehouse"/>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Warehouses Body
                    </Card.Body>
                        </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Form.Check} variant="link" eventKey="1" label="Hospitality">
                        
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Form.Check} variant="link" eventKey="2" label="General Labor">
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Form>
                            <p>Thing</p>
                        </Form>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Form.Check} variant="link" eventKey="3" label="Office">
                       
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Form.Check} variant="link" eventKey="4" label="iRelaunch">
                    
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Form>
            </div>
        )
    }

}

export default SkillsForm;