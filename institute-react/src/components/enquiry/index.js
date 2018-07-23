import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import Input from "../inputBox";
import EnquiryData from "./enquiryData";

export default class Enquiry extends Component {
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
    this.getEnquiries = this.getEnquiries.bind(this);

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
    console.log(event.target.elements);
    console.log(formData);

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

  getEnquiries(){
    axios({
      url: 'http://localhost:3001/showCourses',
      method: 'GET'
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          data: response.data
        })
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getEnquiries();
  }

  componentDidUpdate() {
    console.log('Update')
    // this.getEnquiries();
  }

  render() {
    return (
      <div className="Enquiry">
        <Button bsStyle="primary" onClick={this.handleShow}>+</Button>

        <EnquiryData />
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

