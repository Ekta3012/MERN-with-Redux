import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';

class Dashboard extends Component {
  render() {
        return (
            <div className="Dashboard">
              <Link to={'/dashboard/enquiry'}>
                  <ReactBootstrap.Button  bsStyle="info"> Enquiry</ReactBootstrap.Button>
              </Link>
              <Link to={'/dashboard/courses'}>
                  <ReactBootstrap.Button bsStyle="info">Courses</ReactBootstrap.Button>
              </Link>
            </div>
          );
  }
}

export default Dashboard;
