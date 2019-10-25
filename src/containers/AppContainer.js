import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import {Tabs, Tab, TabContainer} from 'react-bootstrap';
import {Image, Navbar} from 'react-bootstrap';
import Laborocity from '../Laborocity.png';

import { connect } from 'react-redux'
import {fetchSkills, addSkill} from '../actions/skills';

import SkillsForm from '../components/SkillsForm';
import Equipment from '../components/Equipment';
import Certifications from '../components/Certifications';

//Consider extrapolating, then importing SkillsCards and Equipment cards?


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
          <Navbar bg="light">
          <Navbar.Brand href="#home">
            <Image src={Laborocity} className="d-inline-block align-top" fluid />
          </Navbar.Brand>
      
              {/* <TabContainer>
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
              </Navbar>
            </div>  */}
            
        )
    }

}

const mapStateToProps = state => {
  console.log("mapStateToProps, AppContainer state: ", state)
  // debugger
  return {
    // Naming the prop held by the AppContainer and what we're filling it with.
          skills: state.skills.skills
  }
}

export default connect(mapStateToProps, { fetchSkills, addSkill })(AppContainer)