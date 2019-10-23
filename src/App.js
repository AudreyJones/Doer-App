import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Image, Navbar, Tabs, Tab, TabContainer} from 'react-bootstrap';
import Laborocity from './Laborocity.png';
import './App.css';
import Skills from './components/Skills';
import Equipment from './components/Equipment';
import Certifications from './components/Certifications';

class App extends Component {
  

render() {
  // console.log("App.js state:", this)
  // debugger
  return (
    <Router>
      <Navbar bg="light">
          <Navbar.Brand href="#home">
            <Image src={Laborocity} className="d-inline-block align-top" fluid />
          </Navbar.Brand>
      </Navbar>

    <div>
      <TabContainer>
        <Tabs defaultActiveKey="skills">
      <Tab eventKey="skills" title="Skills">
        <Skills/>
      </Tab>
      <Tab eventKey="equipment" title="Equipment">
        <Equipment/>
      </Tab>
      <Tab eventKey="certifications" title="Certifications">
        <Certifications/>
      </Tab>
        </Tabs>
      </TabContainer>

      {/* <Switch>   */}
        {/* <Route exact path="/skills" component={}/>
        <Route exact path="/equipment" component={}/>
        <Route exact path="/materials" component = {}/>
        */}
      {/* </Switch> */}
    
    </div> 
    </Router>
  )
}
}

export default App;
