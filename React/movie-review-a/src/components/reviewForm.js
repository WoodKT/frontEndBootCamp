import React, { useState } from "react";
import "./stars.css";
import { Card } from "react-bootstrap";

export default function UserForm({addReview}) {
  const initialState = {
    username: "",
    userText: "",
    rating:"",
  };
  
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(state);
    setState(initialState);
  };

  console.log(state);

  return ( 
    <Card className="border-primary"> 
    <form onSubmit={handleSubmit}>
      <Card.Header as="h5">Submit Review Here</Card.Header>
      <div className="card-body">
      <div className="mb-3">
        <label>Username</label> <br/>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Text Review</label> <br/>
        <input
          type="text"
          name="userText"
          placeholder="Enter your review here"
          value={state.userText}
          onChange={handleChange}
        />
      </div>
      <div className="rating mb-3">
        <input className="form-check-input" type="radio" id="star5" name="rating" value="5" checked={state.rating === "5"} onChange={handleChange} />
        <label className="star" htmlFor="star5" title="Awesome" aria-hidden="true" ></label>
        <input className="form-check-input" type="radio" id="star4" name="rating" value="4" checked={state.rating === "4"} onChange={handleChange}/>
        <label className="star" htmlFor="star4" title="Great" aria-hidden="true"></label>
        <input className="form-check-input" type="radio" id="star3" name="rating" value="3" checked={state.rating === "3"} onChange={handleChange} />
        <label className="star" htmlFor="star3" title="Very good" aria-hidden="true"></label>
        <input className="form-check-input" type="radio" id="star2" name="rating" value="2" checked={state.rating === "2"} onChange={handleChange} />
        <label className="star" htmlFor="star2" title="Good" aria-hidden="true"></label>
        <input className="form-check-input" type="radio" id="star1" name="rating" value="1" checked={state.rating === "1"} onChange={handleChange} />
        <label className="star" htmlFor="star1" title="Bad" aria-hidden="true"></label>
      </div> <br/><br/>
      </div>

      <div className="card-footer">
        <button className="btn btn-primary" type="submit">Submit Review</button>
      </div>
    </form>
    </Card>
  )
}

/* rating mb-3 form-check-inline
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

  
https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook
https://github.com/Kellswork/contact-info

https://stackoverflow.com/questions/49622643/how-to-get-the-value-using-react-rating-component-in-my-form

https://bootstrap-vue.org/docs/components/form-rating

https://ibaslogic.com/simple-guide-to-react-form/
 */
