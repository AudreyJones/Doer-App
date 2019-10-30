import React, { Component } from 'react';
import {connect} from 'react-redux'
import {skillsData} from './SkillsData'
import { fetchSkills, addSkill } from '../actions/skills'
import {Accordion, AccordionToggle, Button, Form, Col, Card, Image, Container, Row} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import IdeasLogo from '../Ideas Logo.png'


function CustomToggle({ children, eventKey }) {
    // debugger
    const handleClick = (event) => {
        // debugger
        // console.log("handleClick state: ", this.state)
        // console.log("handleClick props: ", this.props)
       return(
        <Accordion>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                Categories of {children}
            </Card.Body>
        </Accordion.Collapse>
        </Accordion>
        
       )
    }

    return (
    <Card>
        <Card.Header>
            <div class="custom-control custom-switch" onClick={handleClick}>
                <input type="checkbox" class="custom-control-input" id={children} onClick={handleClick}/>
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
            // skills:[]

        }
    }

    componentDidMount() {
        this.props.fetchSkills()
    }

    // handleClick = (event, children) => {
    //     debugger
    //     return(
    //     <Accordion.Collapse eventKey="1">
    //        <Card.Body>
    //           Body
    //        </Card.Body>
    //     </Accordion.Collapse>
    //     )
    //     // console.log("handleClick state: ", this.state)
    //     // console.log("handleClick props: ", this.props)
       
    //     // this.setState({[event.target.name]: event.target.value})
    // }
    //Tethers the object to this component?
    skillsData = {skillsData}
    renderCards = () => {
        return skillsData.map(skill => {
            // debugger      
            return (
                <Card>
                    <Card.Body>{skill.name}</Card.Body>
                </Card>
            )
            })
    }
    

    render(){
        console.log("SkillsForm state:", this.state)
        console.log("SkillsForm props:", this.props)
        console.log("skillsData: ", {skillsData})

        
    
        return (
            <div> 
                {/* <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={IdeasLogo} fluid/>
                        </Col>
                    </Row>
                </Container> */}
                 
                    {/* <Accordion> */}
                        {/* Trying to create a custom Toggle that, when triggered onClick, opens collapsed Accordion.Collapse and displays Sub-Category forms */}
                        {this.renderCards()}
                        
                       
                                    <CustomToggle as={Button} eventKey="0" onClick={this.handleClick} children="Warehouse" equipment="Things">   
                                            {/* {skill.name}  */}
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Sub-categories of Warehouse work
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    </CustomToggle>

                        
                                        
                                    
                               
                                {/* <AccordionToggle as={Button} eventKey="1" children="Hospitality" onClick={this.onClick}>
                                    Hospitality
                                </AccordionToggle>
                                <Accordion.Collapse eventKey="1" onClick={this.onClick}>
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                </Accordion.Collapse> */}
                                

                                {/* <AccordionToggle as={Button} eventKey="2" children="General Labor"> General Labor
                                </AccordionToggle>
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
                                    </Accordion.Collapse> */}
                                

                                {/* <AccordionToggle as={Button} eventKey="3" children="Office" > Office
                                </AccordionToggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse> */}
                                

                                {/* <AccordionToggle as={Button} eventKey="4" children="iRelaunch" > iRelaunch
                                </AccordionToggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            Body
                                        </Card.Body>
                                    </Accordion.Collapse> */}
                        
                    {/* </Accordion> */}
                   
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
// export default SkillsForm