import { useState } from "react";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";

export default function Review() {
    // here we create an array state to store the review form data
    const [reviews, updateReviews] = useState([]);
  
    const addReview = (review) => {
      updateReviews([...reviews, review]);
    };
  
    return (
        <div>
        <div>
            <ReviewList reviews={reviews} />
        </div><br/>
        <div>
            <ReviewForm addReview={addReview} />
        </div>
        </div>
    );
  }