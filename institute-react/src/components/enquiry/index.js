import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Input from "../inputBox";
import EnquiryData from "./enquiryData";
import { addEnquiryData } from "../../actions";

class Enquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      course:null
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formToJSON = this.formToJSON.bind(this);
    this.showCourses = this.showCourses.bind(this);
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
    this.props.addEnquiryData(formData);

    axios({
      method: 'post',
      url: 'http://localhost:3001/client',
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

  componentWillReceiveProps(newProps){
    console.log("new props",newProps)
  }
  showCourses(){
    axios({
      url: 'http://localhost:3001/showCourses',
      method: 'GET'
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  componentDidMount() {
    this.showCourses();
  }

  
  render() {
    return (
      <div className="Enquiry">
        <Button bsStyle="primary" onClick={this.handleShow}>+</Button>
        <EnquiryData />
        {
         this.props.enquiry.map((x,index)=>{
           return (
            <ReactBootstrap.Table striped bordered condensed hover responsive>
                <tr key = {index}>
                  <td>{x.name}</td>
                  <td>{x.place}</td>
                  <td>{x.mobile}</td>
                  <td>{x.course}</td>
                  <td>{x.description}</td>
                </tr>
            </ReactBootstrap.Table>
           )
         })
          }
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enquiry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" onSubmit={this.handleSubmit}>
              <Input type="text" name="name" />
              <Input type="text" name="place" />
              <Input type="text" name="mobile" />
              <select>
                {this.state.data.map(function (item, key) {
                  return (
                    <option key={key} name="course" value={item.name}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
              <Input type="text" name="description" /><br/>
              <Button type="submit" bsStyle="success">Submit</Button>
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
  enquiry: state.enquiries
})

const mapDispatchToProps = (dispatch) => ({
  addEnquiryData: bindActionCreators(addEnquiryData, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Enquiry); 


