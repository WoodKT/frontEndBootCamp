//a container inside of a Movie that houses Review components.
import { render } from "@testing-library/react";
import React from "react";
import Review from "./review";

function ReviewList() {
    let reviews = [
        { content: "This is my review using functional components", 
          username: "Walt", 
          date: "January 12, 2022" },
        { content: "Here is another review from the functional reviewList", username: "Isiah", date: "February 1, 2022"},
        { content: "Here's the final review from the reviewList functional component", username: "Lisa", date: "February 2, 2022"}
    ];

    return (
        <div className="container">
            <Review {...{stars: stars, content: "This is my post content inside the functional component", username: "Jeff"}} />
            <Review {...{content: 'Here is another post!!!', username: "Myles"}} />
            <Review />
        </div>
    )
}