import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchSkills, selectSkill } from '../actions/skills'

import {Accordion, Card, Form, Switch} from 'react-bootstrap';




  

class SkillsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            categories:[],
            equipment: []

        }
    }

    componentDidMount() {
        this.props.fetchSkills()
    }

    // handleCheckBoxChange = (event) => {
    //     // Once something is checked, push it into the materials array for this project that is to be created!
    //     // debugger
    //     console.log(event.target)
    //     console.log("handleChecked state: ", this.state)
    //     console.log("handleChecked props: ", this.props)
    //     const materialsList = [...this.state.material_ids]
    //     //   debugger
    //       materialsList.push(event.target.value)
    //       this.setState({material_ids: materialsList})
    //     }

    // handleChange = (event) => {
        
    //     console.log("handleChange state: ", this.state)
    //     console.log("handleChange props: ", this.props)
    //     // debugger
    //     this.setState({[event.target.name]: event.target.value})
    // }

    render(){
        console.log("SkillsForm state:", this.state)
        console.log("SkillsForm props:", this.props)
        return (
            <div>
                <Form>
                <Accordion defaultActiveKey="0">
                    {/* {this.props.skills.map(skill => 
                        <Card>
                            {/* <Accordion.Toggle as={Switch} eventKey="0" label={skill}/> */}
                                {/* <Accordion.Collapse as={Switch} eventKey="0">
                                    <Card.Body>
                                        <Form.Group>
                                            <Form.Check
                                                type="checkbox"
                                                id="default-checkbox"
                                                label={skill}
                                                value={skill}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                    )} */}
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
const mapStateToProps = state => {
    console.log("mapStateToProps state of SkillsForm: ", state)
    return{
        skills: state.skills.skills
        // all_Materials: state.materials, all_projects: state.projects
    }
}

export default connect(mapStateToProps,{fetchSkills, selectSkill})(SkillsForm)