import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  return (
      <Router>

    <div className="App">

       <NavBar/>
        <Switch>
            <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />
            <Route exact path="/cart" component={Cart} />
        </Switch>

    </div>


      </Router>
=======
import {Navbar} from 'react-bootstrap';

function App() {
  return (

    <div className="navbar-fixed">
    <Navbar bg="light">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Navbar.Brand>Brand text</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>

  </div>
        
>>>>>>> master
  );
}

export default App;
