import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Enquiry from './components/enquiry/index';
import Courses from './components/courses/index';
import Home from './components/home';

class Routes extends Component {
  render() {
    return (
        <Router>
            <div className="Route">
                <Route exact={true} path="/"  component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/enquiry" component={Enquiry} />
                <Route path="/dashboard/courses" component={Courses} />
            </div>
        </Router>
    );
  }
}

export default Routes;
