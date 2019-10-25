import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import {Image, Navbar} from 'react-bootstrap';
import Laborocity from './Laborocity.png';



// import AppContainer from './containers/AppContainer';



// importing our various Containers and Presentational components...
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
      <Navbar bg="light">
          <Navbar.Brand href="#home">
            <Image src={Laborocity} className="d-inline-block align-top" fluid />
          </Navbar.Brand>
      </Navbar>
        <Link to="/skills"><button>Skills</button></Link>
        <Link to="/equipment"><button>Equipment</button></Link>
        <Link to="/certifications"><button>Certifications</button></Link>
      
        
        <Switch>  
          {/* <Route exact path="/materials/:id" component={MaterialShow}/>
          <Route exact path="/projects/:id" component={ProjectShow}/> */}
          <Route exact path="/certifications" component = {Certifications}/>
          <Route exact path="/equipment" component = {Equipment}/>
          <Route exact path="/skills" component = {SkillsForm}/>
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

export default App;
