import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userReview: '',
          }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
  resetReview() {
    this.setState({
      userReview: ''
    });
  }
  
    handleSubmit(event) {
        event.preventDefault();   
      this.props.onFormSubmit(this.state);
      this.resetReview(); 
    }

      handleChange(e) { 
      let target = e.target;
      let name = target.name;
      let value = target.value;
      this.setState({
        [name]: value
    });
    }

    render() { 
      return ( 
        <Form className="reviewFormClass">

                <Form.Group className="mb-3" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control as="textarea" id="userName" name="userName" onChange={this.handleChange} placeholder='Username' rows={1} value={this.userName}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>New Review</Form.Label>
                  <Form.Control as="textarea" id="userReview" name="userReview" onChange={this.handleChange} placeholder='Write a review for the movie here!' rows={3} value={this.userReview}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Rate</Form.Label>
                  <Form.Control as="button" id="rating" name="rating" onChange={this.handleChange} placeholder="" rows={3} value={this.stars}/>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={this.handleSubmit}>Submit Review</Button>
                </div>
                <input type='hidden' name='movieId' id='movieId' value={this.id}/>
                <input type='hidden' id='showMovieId' placeholder={this.id}/>
              </Form>
      )
    }
  }

// https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968

// https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook
//https://github.com/Kellswork/contact-info
