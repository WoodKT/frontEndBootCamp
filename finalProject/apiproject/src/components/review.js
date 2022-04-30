//A text review a user can leave on a movie.
import React from "react";

export default class Review extends React.Component {
    constructor(props){   
        super(props);       
        this.state = {
            user: props.user,
            movieReview: props.movieReview,
        };
    }

    render() {
        return (
            <div className="card border-dark w-75">
                <h5 className="card-header bg-primary text-white">
                    {this.state.user}
                </h5>
                <div className="card-body">
                    {this.state.movieReview}
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    }
}

// import React from "react";
// import Stars from "./stars";

// let e = React.createElement;

// function Review(props) {
//     let stars; 
//     if (props.stars) {
//         stars = props.stars.map((stars, index) => <Stars key={index} {...stars} />);
//     }
//         return(
//             <div className='card w-75'>
//                 <div className='card-header bg-primary text-white'>
//                     {props.user}
//                 </div>
//                 <div className='card-body'>
//                     {props.content}
//                 </div>
//                 <div className='card-footer'>
//                     <Stars />
//                 </div>
//             </div>
//         );
//     }
// export default Review