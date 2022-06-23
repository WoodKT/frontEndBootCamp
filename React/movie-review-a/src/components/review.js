import { useState } from "react";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";

export default function Review() {
    // here we create an array state to store the contact form data
    const [reviews, updateReviews] = useState([]);
  
    const addReview = (review) => {
      updateReviews([...reviews, review]);
    };
  
    return (
      <div>
        <ReviewForm addReview={addReview} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
// import React from "react";
// import { Card } from "react-bootstrap";

// export default class Review extends React.Component {
//     constructor(props){   
//         super(props);       
//             this.text = props.text;
//             this.username = props.username;
//             this.userText = props.userText;
//             this.rating = props.rating;
//             this.key = props.key;
//     }

//     render() {
//         return (
//             <Card>
//                 <Card.Header>{this.username}</Card.Header>
//                 <Card.Body>{this.userText} {this.rating} </Card.Body>
//             </Card>
//         );
//     }
// }