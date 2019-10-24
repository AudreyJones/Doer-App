import React, { Component } from 'react';

import {Accordion, Card, Form, Switch} from 'react-bootstrap';
// import customToggle from './helpers/customToggle'
  


class SkillsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []

        }
    }

    componentDidMount() {
        console.log("SkillsForm did mount; this.props.skills: ")
        console.log(this.props.skills)
    }

    render(){
        return (
            <div>
                <Form>
                <Accordion defaultActiveKey="0">
                    {this.props.skills.map(skill => 
                        <Card>
                            {/* <Accordion.Toggle as={Switch} eventKey="0" label={skill}/> */}
                                <Accordion.Collapse as={Switch} eventKey="0">
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Check
                                                type="checkbox"
                                                id="default-checkbox"
                                                label={skill}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    )}
                    {/* <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">General Labor</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form.Group>
                                    <Form.Check
                                    type="checkbox"
                                    id="default-checkbox"
                                    label="Construction"
                                    
                                    /> */}

                                {/* </Form.Group>

                                <Form.Group>
                                <Form.Check
                                type="checkbox"
                                id="default-checkbox"
                                label="Restoration"
                                />
                                </Form.Group>

                                <Form.Group>
                                <Form.Check
                                type="checkbox"
                                id="default-checkbox"
                                label="Painting"
                                />
                                </Form.Group>
                                   
                                
                            </Card.Body>
                        </Accordion.Collapse> */}
                    {/* </Card> */}
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">Office</Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
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