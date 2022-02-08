import { render } from "@testing-library/react";
import React from "react";
import Post from "./post";

function NewsFeed() {
    let comments = [
        { content: "This is my post using functional components", 
          username: "Jeff", 
          date: "January 31, 2022" },
        { content: "Here is another post from the functional NewsFeed", username: "Isiah", date: "February 1, 2022"},
        { content: "Here's the final post from the NewsFeed functional component", username: "Lisa", date: "February 2, 2022"}
    ];

    return (
        <div className="container">
            <Post {...{comments: comments, content: "This is my post content inside the functional component", username: "Jeff"}} />
            <Post {...{content: 'Here is another post!!!', username: "Kristy"}} />
            <Post />
        </div>
    )
}

export default NewsFeed