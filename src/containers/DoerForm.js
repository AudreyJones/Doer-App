import React, { Component } from 'react';
import {Tabs, Tab, TabContainer} from 'react-bootstrap';
import { connect } from 'react-redux'

import SkillsForm from '../components/SkillsForm';
import Equipment from '../components/Equipment';
import Certifications from '../components/Certifications';

import {fetchSkills, selectingSkill} from '../actions/skills';
  


class DoerForm extends Component {
    constructor() {
        super();
        this.state = {
            skills: ['Warehouse', 'Hospitality', 'General Labor', 'Office', 'iRelaunch'],
            equipment: []
        }
    }

    componentDidMount() {
      console.log("Doer did mount")
      console.log(this.state)
      console.log(`skills: ${this.state.skills}`)
      // this.props.fetchSkills()
    }

    render(){
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
  console.log("mapStateToProps of DoerForm: ", state)
  return {
          skills: state.skills.skills
  }
}

export default connect(mapStateToProps, { fetchSkills })(DoerForm)