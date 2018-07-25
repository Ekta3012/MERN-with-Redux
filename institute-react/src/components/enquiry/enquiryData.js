import React, { Component } from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';

class EnquiryData extends Component {
    constructor(){
        super() 
          this.state = {
            data: []
          }
        
      }
      componentDidMount() {
        axios({
         url: 'http://localhost:3001/showClient',
         method: 'GET'
        })
        .then((response) => {
         // console.log(response.data);
          this.setState({
            data :response.data
          })
          console.log(this.state.data);
        })
        .catch((error) => {
          console.log(error);
        });  
     }
  render() {
    return (
      <ReactBootstrap.Table striped bordered condensed hover responsive>
        <thead>
          <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(function(item, key) {              
            return (
              <tr key = {key}>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.mobile}</td>
                  <td>{item.course}</td>
                  <td>{item.description}</td>
              </tr>
            )
          })} 
        </tbody>
    </ReactBootstrap.Table>
    );
  }
}

export default EnquiryData;
