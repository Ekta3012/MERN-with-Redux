import React, { Component } from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';

class CoursesData extends Component {
    constructor(){
        super() 
          this.state = {
            data: []
          }
        this.getCourses = this.getCourses.bind(this);  
      }
      getCourses(){
        axios.get('http://localhost:3001/showCourses')
        .then((response) => {
          this.setState({
            data :response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });     
      }
      componentDidMount() {
        this.getCourses();
     }
     componentDidUpdate() {
      this.getCourses();
   }
  render() {
    return (
      <ReactBootstrap.Table striped bordered condensed hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(function(item, key) {              
                  return (
                      <tr key = {key}>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                      </tr>
                    )
                })} 
            </tbody>
         </ReactBootstrap.Table>
    );
  }
}

export default CoursesData;
