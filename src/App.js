import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import {Image, Navbar} from 'react-bootstrap';
import Laborocity from './Laborocity.png';
import DoerForm from './containers/DoerForm';

class App extends Component {

  componentDidMount(){
    this.setState({...this.state, skills: ['Warehouse', 'Hospitality', 'General Labor', 'Office', 'iRelaunch']})
  }
  
render() {
  console.log("App.js state:", this.state)
  return (
    <Router>
      <Navbar bg="light">
          <Navbar.Brand href="#home">
            <Image src={Laborocity} className="d-inline-block align-top" fluid />
          </Navbar.Brand>
      </Navbar>
      <DoerForm />
    </Router>
  )
}
}

export default App;
