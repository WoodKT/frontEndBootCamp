export default function UserList({reviews}) {
    return (
      <div>
        {reviews.map((review) => (
          <div className="card" key={review.username}>
            <p className="card-name">{review.username}</p>
            <p>{review.username}</p>
            <p>{review.userText}</p>
            <p>{review.rating}</p>
          </div>
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