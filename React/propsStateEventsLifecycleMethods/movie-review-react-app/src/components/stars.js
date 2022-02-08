//a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
import React, { Component } from "react";
import EmptyStar from "./assets/empty-star.svg";
import FilledStar from "./assets/filled-star.svg";
import "./styles.css";

class Stars extends Component {
    constructor(props) {
      super(props);
      this.state = {currRating : 0}
      this.onHover = this.onHover.bind(this)
      this.onClick = this.onClick.bind(this) 
    }

   onHover(e) {
    if (e.target.className === 'star') {
     this.setRating(e.target.dataset.value);
    }
   }

   onClick(e) {
    if (e.target.dataset.value === this.state.currRating) {
     this.setRating(e.target.dataset.value - 1);
    }
   }

   setRating(value) {
     this.setState({currRating : value});
   }

   render(){
     return [...Array(this.props.starCount).keys()].map((index) => {
     return (
        <img
          data-value={index + 1}
          className="star"
          onMouseOver={this.onHover}
          onClick={this.onClick}
          src={index + 1 <= this.state.currRating ? FilledStar : EmptyStar}
          alt={
            index + 1 <= this.state.currRating ? "filled star" : "empty star"
          }
        />
      );
    });
  }
}

const RatingSystem = (props) => {
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      <div className="rating">
        <Stars starCount={props.starCount} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <RatingSystem starCount={5} />
    </div>
  );
}


   //https://javascript.plainenglish.io/react-5-star-rating-system-4fa81b71cac9


// import React from 'react'; 

// class Stars extends React.Component {
//     render() {
//         return <button className="btn btn-primary mx-2">Like</button>;
//     }

// }

// export default Stars;





// https://w3collective.com/react-star-rating-component/

// const StarRating = () => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     return (
//       <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//           index += 1;
//           return (
//             <button
//               type="button"
//               key={index}
//               className={index <= (hover || rating) ? "on" : "off"}
//               onClick={() => setRating(index)}
//               onMouseEnter={() => setHover(index)}
//               onMouseLeave={() => setHover(rating)}
//             >
//               <span className="star">&#9733;</span>
//             </button>
//           );
//         })}
//       </div>
//     );
//   };