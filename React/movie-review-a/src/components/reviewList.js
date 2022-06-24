import "./stars.css";
import { Card } from "react-bootstrap";

export default function UserList({reviews}) {
    return (
      <div>
        {reviews.map((review) => (
          <Card key={review.username}>
            {/* <p className="card-name">{review.username}</p> */}
            <Card.Header>{review.username}</Card.Header>
            <Card.Body>{review.userText}</Card.Body>
            <Card.Footer>{review.rating}</Card.Footer>
          </Card>
        ))}
      </div>
    );
  }
// export default class ReviewList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {reviews: new Array()};
//         this.onFormSubmit =this.onFormSubmit.bind(this);
//         }

//         onFormSubmit(formState) {
//             const newreviews = this.state.reviews.slice();
//             newreviews.push(formState);
//             this.setState ({
//                 reviews: newreviews
//             })
//         }    

//     render() {
//         return (
//             <div className='container'>
//                 {this.state.reviews.map(function(review, index) {
//                     return <div key={index}>{review.userName}, {review.userReview}</div>
//                 })}
//                 <ReviewForm onFormSubmit={(formState) => this.onFormSubmit(formState)} />
//             </div>
//         )
//     }  
// }