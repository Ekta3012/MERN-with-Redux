import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
//import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ReactBootstrap from 'react-bootstrap';

import Input from "../inputBox";
import CoursesData from './coursesData';
import { addCourseData,getCourseDataFromDb,postCourseDataInDb } from "../../actions";
import { postCourseAPI,getCourses } from "../../api";


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

  componentDidMount(){
    this.props.getCourseDataFromDb();
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
     this.props.postCourseDataInDb(formData);
     //console.log(this.props.dispatcher)
    

    /* postCourseAPI(formData)
    .then(res =>{
        this.props.dispatcher({
          type:'COURSE_SUCCESS',
          payload: {
            name:res.data.name,
            description:res.data.description
          }
        })
    }) */
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
        <ReactBootstrap.Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
                  {
                    this.props.course.map(function(item, key) {
                      return (
                          <tr key = {key}>
                              <td>{item.name}</td>
                              <td>{item.description}</td>
                          </tr>
                        )
                    })
                  }
            </tbody>
        </ReactBootstrap.Table>

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
});

const mapDispatchToProps = (dispatch) => ({
  getCourseDataFromDb : bindActionCreators(getCourseDataFromDb, dispatch),
  postCourseDataInDb: bindActionCreators(postCourseDataInDb, dispatch),
  addCourseData: bindActionCreators(addCourseData, dispatch),
  dispatcher: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses); 
