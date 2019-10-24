import React, { Component } from 'react';
import {Tabs, Tab, TabContainer} from 'react-bootstrap';
import { connect } from 'react-redux'
import {fetchSkills, selectSkill} from '../actions/skills';

import SkillsForm from '../components/SkillsForm';
import Equipment from '../components/Equipment';
import Certifications from '../components/Certifications';


  


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import { Container, Divider, Card } from 'semantic-ui-react'; //Style Components

// // importing our Action creators and { connect } to mapState and Dispatch to Props!
// import {fetchProjects, addProject} from '../actions/projects';
// import { connect } from 'react-redux';

// // Components to be rendered in or by an event:
// import ProjectCard from '../components/ProjectCard';
// import ProjectForm from '../components/ProjectForm';


class AppContainer extends Component {

    componentDidMount() {
      this.props.fetchSkills()

    }

    render(){
      console.log("Loaded AppContainer")
      console.log("AppContainer.js state:", this.state)
      console.log("AppContainer.js props:", this.props)
        return (
            <div>
              <TabContainer>
                <Tabs defaultActiveKey="skills">
              <Tab eventKey="skills" title="Skills">
                <SkillsForm />
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
  console.log("mapStateToProps state of AppContainer: ", state)
  return {
          skills: state.skills.skills
  }
}

export default connect(mapStateToProps, { fetchSkills, selectSkill })(AppContainer)