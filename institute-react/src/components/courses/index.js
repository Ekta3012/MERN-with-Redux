import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Input from "../inputBox";
import CoursesData from './coursesData';
import { addCourseData } from "../../actions"

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
     this.props.addCourseData(formData);
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
      {
         this.props.course.map((x,index)=>{
           return (
            x.name,x.description
           )
         })
          }
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={this.handleSubmit}>
              <Input type="text" name="name" />
              <Input type="text" name="description" />
              <Input type="submit" value="Submit"/>
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

const mapStateToProps = (state) => ({
  course: state.courses
})

const mapDispatchToProps = (dispatch) => ({
  addCourseData: bindActionCreators(addCourseData, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Courses); 
