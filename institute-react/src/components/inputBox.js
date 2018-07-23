import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input type={this.props.type} name={this.props.name}  placeholder={this.props.name} value={this.props.value} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default Input;
