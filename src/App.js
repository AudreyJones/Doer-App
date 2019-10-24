import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import {Image, Navbar} from 'react-bootstrap';
import Laborocity from './Laborocity.png';
import AppContainer from './containers/AppContainer';

class App extends Component {

  componentDidMount(){
    fetch("http://localhost:3001/skills")
    .then(res => res.json())
    .then(skills => this.setState({skills}))
  }
  
render() {
  console.log("App state:", this.state)
  return (
    <Router>
      <Navbar bg="light">
          <Navbar.Brand href="#home">
            <Image src={Laborocity} className="d-inline-block align-top" fluid />
          </Navbar.Brand>
      </Navbar>

      <AppContainer />

    </Router>
  )
}
}

export default App;
