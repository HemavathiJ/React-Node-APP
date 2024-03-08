import React, { Component } from "react";
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import AddTutorial from './components/add-tutorial.component.js';
import Tutorial from './components/tutorial.component.js'
import TutorialsList from './components/tutorials-list.component.js'

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
             Home
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to={"/add"} className="nav-link"> Add Tutorial</Link>
            </li>
          </div>
        </nav>

        <div className="conatiner mt-3">
          <Routes>
            <Route exact path="/tutorials" element={<TutorialsList />} />
            <Route exact path="/add" element={<AddTutorial />} />
            <Route exact path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;