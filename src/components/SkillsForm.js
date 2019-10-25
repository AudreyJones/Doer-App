import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchSkills, addSkill } from '../actions/skills'
import {Accordion, Form, Col, Switch, Card, Button, Container} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function CustomToggle({ children, eventKey }) {
    // debugger
    const toggleOnClick = useAccordionToggle(eventKey, () =>
    
        <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
                Body
            </Card.Body>
        </Accordion.Collapse>
    );
  
    return (
    <Card>
        <Card.Header>
            <div class="custom-control custom-switch" onClick={toggleOnClick}>
                <input type="checkbox" class="custom-control-input" id={children} />
                <label class="custom-control-label" for={children}>{children}</label>
            </div>
        </Card.Header>
    </Card>
      
    );
  }

class SkillsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills:[]

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
                        
                                <CustomToggle eventKey="0" children="Warehouse"> Warehouse
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </CustomToggle>
                                
                            
                                <CustomToggle eventKey="1" children="Hospitality" > Hospitality
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </CustomToggle>

                                <CustomToggle eventKey="2" children="General Labor" > General Labor
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
                                                    defaultValue={0}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Check id="Construction" label="Construction" value="Construction"/>
                                                    </Col>
                                                    <Col>
                                                        My Experience: {} years
                                                    </Col>
                                                </Form.Row>
                                                <Slider
                                                    defaultValue={0}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Check id="Painting" label="Painting" value="Painting"/>
                                                    </Col>
                                                    <Col>
                                                        My Experience: {} years
                                                    </Col>
                                                </Form.Row>
                                                <Slider
                                                    defaultValue={0}
                                                />
                                            </Form.Group>
                                        </Form> 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </CustomToggle>

                                <CustomToggle eventKey="3" children="Office" > Office
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </CustomToggle>

                                <CustomToggle eventKey="4" children="iRelaunch" > iRelaunch
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </CustomToggle>    
                    </Accordion>
                
            </div>              
        )
    }
}


const mapStateToProps = state => {
    console.log("mapStateToProps of SkillsForm: ", state)
    return{
        these_skills: state.skills
    }
}

export default connect(mapStateToProps,{fetchSkills, addSkill})(SkillsForm)