import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import Input from "../inputBox";
import CoursesData from './coursesData';

class Courses extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formToJSON = this.formToJSON.bind(this);  
  }

  formToJSON(elements) {
    return [].reduce.call(elements, (data, element) => {
 
       data[element.name] = element.value;
 
       return data;
     }, {});
   }
 
   handleSubmit(event) {
     event.preventDefault();
     const formData = this.formToJSON(event.target.elements);
     console.log(formData);
 
    axios({
       method: 'post',
       url: 'http://localhost:3001/course',
       data: formData
     }); 
     this.setState({ show: false });
    }

   handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="Courses">
      <Button bsStyle="primary" onClick={this.handleShow}>+</Button>

      <CoursesData/>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={this.handleSubmit}>
              <Input type="text" name="name" />
              <Input type="text" name="description" />
              <Input type="submit" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Courses;
