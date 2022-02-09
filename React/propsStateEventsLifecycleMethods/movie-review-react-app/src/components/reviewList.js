//a container inside of a Movie that houses Review components.
import React from "react";
import Review from "./review";
import Star from "./stars";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [ {
                user: "KW",
                movieReview: "meh",
                starCount: "3"
            },
            {
                user: "Wheezer",
                movieReview: "Cool Beans!",
                starCount: "5"
            },
            {
                user: "Doom",
                movieReview: "Gross",
                starCount: "1"
            }
            ]
        };
    };

    addReview(review) {
        this.setState({
            reviews: [review, ...this.state.reviews]
        });
    }

    render() {
        let reviews;

        if(this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div>
                <div></div>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    {reviews}
                </div>
            </div>
        )
    }  
    
}
// import { render } from "@testing-library/react";
// import React from "react";
// import Review from "./review";

// function ReviewList() {
//     let reviews = [
//         { content: "This is my review using functional components", 
//           username: "Walt", 
//           date: "January 12, 2022" },
//         { content: "Here is another review from the functional reviewList", username: "Isiah", date: "February 1, 2022"},
//         { content: "Here's the final review from the reviewList functional component", username: "Lisa", date: "February 2, 2022"}
//     ];

//     return (
//         <div className="container">
//             <Review {...{stars: stars, content: "This is my post content inside the functional component", username: "Jeff"}} />
//             <Review {...{content: 'Here is another post!!!', username: "Myles"}} />
//             <Review />
//         </div>
//     )
// }