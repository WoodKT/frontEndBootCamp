//a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React from "react";
import User from "./user";
import Review from "./review";
import Stars from "./stars";
import SubmitButton from "./submit-button";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          review: {
            user: '',
            movieReview: ''
          },
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


//////////////////
// import React from "react";
// import User from "./user";
// //import Review from "./review";
// import SubmitButton from "./submit-button";

// export default class ReviewForm extends React.Component {
//     render() {
//         return (
//             <div className="container">
//             <div className="card w-25 position-absolute top-50 start-50 translate-middle">
//                 <div className="card-header bg-dark text-white border border-5 border-dark">
//                     <h3>Review:</h3>
//                 </div>
//                 <div className="card-body border border-3 border-dark">
//                     <User />
//                     <Review />
//                 <div>
//                     <SubmitButton />
//                 </div>

//                 </div>

//             </div>
//             </div>
//         );
//     }
// }