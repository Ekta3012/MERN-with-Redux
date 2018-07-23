import React, { Component } from 'react';
import Input from "./inputBox";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Input type="text" name="username"/>
        <Input type="password" name="password"/>
        <Input type="submit" value="Submit"/>
        <Input type="submit" value="Cancel"/>
      </div>
    );
  }
}

export default Login;
