import React, { Component } from 'react';
import axios from 'axios';

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
          console.log(this.state.data);
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
        <div>
          {this.state.data.map(function(item, key) {               
              return (
                <p key = {key}>
                    {item.name}
                </p>
              )
            
            })} 
         </div>
    );
  }
}

export default CoursesData;
