import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchSkills, addSkill } from '../actions/skills'
import {Accordion, Form, Col, Switch, Card, Button, Container} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';


    


class SkillsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills:[],
            category_ids:[],
            equipment: []

        }
    }

    componentDidMount() {
        this.props.fetchSkills()
    }

    render(){
        console.log("SkillsForm state:", this.state)
        console.log("SkillsForm props:", this.props)

        // const allSkills = this.props;
    
        return (
            <div> 
                {/* {allSkills.map(skill =>   */}
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Warehouse
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Body
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Hospitality
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Body
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                General Labor
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Form>
                                    
                                    <Form.Group>
                                        <Form.Row>
                                            <Col>
                                                <Form.Check id="Restoration" label="Restoration" value="Restoration"/>
                                            </Col>
                                            <Col>
                                                My Experience: {} years
                                            </Col>
                                        </Form.Row>
                                        <Slider
                                            
                                            
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                    <Form.Check label="Construction" value="Construction"/>
                                    <Slider
                                            defaultValue={0}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                    <Form.Check label="Painting" value="Painting"/>
                                    <Slider
                                            defaultValue={0}
                                        />
                                    </Form.Group>

                                    
                                </Form>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                Office
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Body
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                iRelaunch
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                Body
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                        
                {/* ) */}
                {/* } */}
                
            </div>              
        )
    }
}
                    
                    
                    


const mapStateToProps = state => {
    console.log("mapStateToProps state of SkillsForm: ", state)
    return {
        skills: state.skills.skills
    }
}

export default connect(mapStateToProps,{fetchSkills, addSkill})(SkillsForm)