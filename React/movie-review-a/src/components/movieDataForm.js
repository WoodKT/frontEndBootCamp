import React from "react";
import MovieData from "./movieData";
import SubmitButton from "./submit-button";

export default class MovieDataForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        title: props.title,
        synopsis: props.synopsis,
        audience: props.audience,
        reviews: [] 
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleChange(event) { 
      const {value, name} = event.target;
      this.setState({
        review: {
          ...this.state.review,
          [name]: value
        }
      });
    };
  
    handleSubmit(event) {
        if(this.state.review !== ''){
          this.state.reviews.push(new Review(this.state.user, this.state.movieReview))
        }
        event.preventDefault();    
    }
  
    render() { 
      return ( 
        <div className="card border-info w-75">
          <form onSubmit={this.handleSubmit}> 
              <div className="card-header bg-info text-center">
                <h3>Review:</h3>
              </div>
  
              <div className="card-body">
                <div className="form-group">
                <label>
                    User:
                    <input 
                    type="text" required
                    name="user"
                    placeholder="User"
                    className="form-control"
                    value={this.state.review.user} 
                    onChange={this.handleChange}/>
                </label>
                </div>
  
                <br />
  
                <div className="form-group">
                <label>
                    Review:
                    <textarea 
                    name="movieReview"
                    placeholder="Review"
                    className="form-control"
                    value={this.state.review.movieReview}
                    onChange={this.handleChange} />
                </label>
                </div>

                <div className="form-group">
                    <Stars />
                </div>

              </div>
  
                <br />
  
              <div className="card-footer">
                <div className="form-group">
                    <SubmitButton />
                </div>
              </div>
          </form>
        </div>
      );
    }
  }