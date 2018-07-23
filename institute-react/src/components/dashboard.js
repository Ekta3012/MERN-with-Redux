import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Input from "./inputBox";

class Dashboard extends Component {
  render() {
        return (
            <div className="Dashboard">
              <Link to={'/dashboard/enquiry'}>
                  <Input type="button" value="Enquiry" bsStyle="success"/> 
              </Link>
              <Link to={'/dashboard/courses'}>
                  <Input type="button" value="Courses" bsStyle="info"/>
              </Link>
            </div>
          );
  }
}

export default Dashboard;
