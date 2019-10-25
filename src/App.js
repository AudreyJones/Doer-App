import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import {Image, Navbar, Tab, Tabs, Container, Nav} from 'react-bootstrap';
import { NavTab } from "react-router-tabs";

import Laborocity from './Laborocity.png';
import BlueMenu from './blue menu icon.png';

import {connect} from 'react-redux'
import { fetchSkills, addSkill } from './actions/skills'

import SkillsForm from './components/SkillsForm';
import Equipment from './components/Equipment';
import Certifications from './components/Certifications';




class App extends Component {

  componentDidMount(){
    fetch("http://localhost:3000/skills")
    .then(res => res.json())
    .then(skills => this.setState({skills}))
  }
  
  render() {
  console.log("App state:", this.state)
  

    return (
      <Router>
      <div >
      <Navbar >
          <Navbar.Brand href="/skills"><Image src={Laborocity} className="d-inline-block align-top" fluid /> </Navbar.Brand>
            <Image src={BlueMenu}  width="50" height="50"  fluid/>
      </Navbar>

      {/* Modified 'NavTabs' to technically use tabs. Styling is misbehaving, so I chose to use simple Links and buttons, which look neater. */}
      {/* <Nav>
        <NavTab to="/skills" activeStyle={{STYLING}}>Skills</NavTab>
        <NavTab to="/equipment">Equipment</NavTab>
        <NavTab to="/certifications">Certifications</NavTab>
      </Nav> */}

        <Link to="/skills"><button>Skills</button></Link>
        <Link to="/equipment"><button>Equipment</button></Link>
        <Link to="/certifications"><button>Certifications</button></Link>
      
        <Switch>  
          <Route exact path="/certifications" component = {Certifications}/>
          <Route exact path="/equipment" component = {Equipment}/>
          <Route exact path="/skills" component = {SkillsForm}/>
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps, App state: ", state) //state.skills is still loading
  // debugger
  return {
    // Naming the prop held by the App and what we're filling it with.
          all_skills: state.skills.skills
  }
}

export default connect(mapStateToProps, { fetchSkills, addSkill })(App)
