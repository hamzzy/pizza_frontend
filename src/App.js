import React from 'react';
import logo from './logo.svg';
import './App.css';
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
            <Route exact path="/" component={Main}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>

        </div>


      </Router>

  )
}
export default App;
