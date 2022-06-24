import React, { useState } from "react";
import "./stars.css"
import { Button, Form } from "react-bootstrap";

export default function UserForm({addReview}) {

  const [state, setState] = useState({
    username: "",
    userText: "",
    rating:"",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(state);
    setState({ username: "", userText: "", rating: "" });
  };

      return ( 
        <div className="form-container">
        <form onSubmit={handleSubmit}> 
          <div>
            <h3>Review Form</h3>
          </div>
          <div>
          <div>
            <label>Username</label> <br/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Text Review</label> <br/>
            <input
              type="text"
              name="userText"
              placeholder="Enter your review here"
              value={state.userText}
              onChange={handleChange}
            />
          </div>
          <div>
          <div className="rating">
            <input type="radio" id="star5" name="rating" value="5" onChange={handleChange} />
            <label className="star" htmlFor="star5" title="Awesome" aria-hidden="true" ></label>
            <input type="radio" id="star4" name="rating" value="4" onChange={handleChange}/>
            <label className="star" htmlFor="star4" title="Great" aria-hidden="true"></label>
            <input type="radio" id="star3" name="rating" value="3" onChange={handleChange} />
            <label className="star" htmlFor="star3" title="Very good" aria-hidden="true"></label>
            <input type="radio" id="star2" name="rating" value="2" onChange={handleChange} />
            <label className="star" htmlFor="star2" title="Good" aria-hidden="true"></label>
            <input type="radio" id="star1" name="rating" value="1" onChange={handleChange} />
            <label className="star" htmlFor="star1" title="Bad" aria-hidden="true"></label>
          </div>
          </div>
          </div>

          <div>
            <button className="btn btn-primary" type="submit">Submit Review</button>
          </div>
        </form>
      </div>
      )
  }

{/* render() { 
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

  https://blog.devgenius.io/react-bootstrap-creating-controlled-forms-to-add-and-update-data-with-a-flexible-number-of-inputs-6d2e4e6977c7

https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968

https://medium.com/@aaron_schuyler/building-react-forms-with-usestate-2cf45a3110ac

https://therichpost.com/reactjs-star-rating-working-demo-part-1-star-rating-form/

https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook
https://github.com/Kellswork/contact-info

https://www.npmjs.com/package/react-star-rating-input

https://stackoverflow.com/questions/49622643/how-to-get-the-value-using-react-rating-component-in-my-form

https://bootstrap-vue.org/docs/components/form-rating
 */}
