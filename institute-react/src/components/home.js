import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Welcome 
        <Link to={'/login'}>
            <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
