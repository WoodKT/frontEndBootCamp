//a container for all the Movie components and their data.
import { render } from '@testing-library/react';
import React from 'react';
import Review from './review';

function MovieList() {
    let reviews = [
        { content: "This is my review using functional components", 
          username: "Jeff", 
          date: "January 31, 2022" },
        { content: "Here is another review from the functional MovieList", username: "Isiah", date: "February 1, 2022"},
        { content: "Here's the final review from the MovieList functional component", username: "Lisa", date: "February 2, 2022"}
    ];

    return (
        <div className="container">
            <Review {...{content: "This is my review content inside the functional component", username: "Jeff"}} />
            <Review {...{content: 'Here is another review!!!', username: "Kristy"}} />
            <Review />
        </div>
    )
}

export default MovieList