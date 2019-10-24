import React, { Component } from 'react';
import {Tabs, Tab, TabContainer} from 'react-bootstrap';
import { connect } from 'react-redux'

import SkillsForm from '../components/SkillsForm';
import Equipment from '../components/Equipment';
import Certifications from '../components/Certifications';

import {fetchSkills, selectSkill} from '../actions/skills';
  


class DoerForm extends Component {
    constructor() {
        super();
        this.state = {
            skills: [],
            equipment: []
        }
    }

    componentDidMount() {
      console.log("Doer state:", this.state)
      this.props.fetchSkills()

    }

    render(){
      console.log("DoerForm.js state:", this.state)
        return (
            <div>
              <TabContainer>
                <Tabs defaultActiveKey="skills">
              <Tab eventKey="skills" title="Skills">
                <SkillsForm skills={this.state.skills}/>
              </Tab>
              <Tab eventKey="equipment" title="Equipment">
                <Equipment/>
              </Tab>
              <Tab eventKey="certifications" title="Certifications">
                <Certifications/>
              </Tab>
                </Tabs>
              </TabContainer>
            </div> 
        )
    }

}

const mapStateToProps = state => {
  console.log("mapStateToProps of DoerForm: ", state.skills.skills)
  return {
          skills: state.skills.skills
  }
}

export default connect(mapStateToProps, { fetchSkills, selectSkill })(DoerForm)