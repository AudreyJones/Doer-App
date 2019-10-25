import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchSkills, addSkill } from '../actions/skills'
import {Accordion, Form, Switch, Card, Button} from 'react-bootstrap';


class SkillsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
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
                                Skill
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
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