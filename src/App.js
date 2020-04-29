import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

function App() {
  return (
      <Router>

    <div className="App">

       <NavBar/>
        <Switch>
            <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />

        </Switch>

    </div>


      </Router>
  );
}

export default App;
