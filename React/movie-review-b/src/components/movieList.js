import React from "react";
import MovieData from "./movieData";

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="d-flex flex-wrap align-items-center justify-content-center"> 
            <MovieData {...
                {id: 1,
                    key:1,
                    title: "Spirit",
                    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    audience: "G"}} />
            <MovieData {...
                {id:2,
                    key:2,
                    title: "A Little Princess",
                    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ut lectus arcu bibendum at varius vel. Amet dictum sit amet justo donec enim diam vulputate ut. At erat pellentesque adipiscing commodo elit. Nisi scelerisque eu ultrices vitae auctor eu augue. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Purus in mollis nunc sed id semper. Augue neque gravida in fermentum et sollicitudin ac. Orci sagittis eu volutpat odio facilisis mauris. ",
                    audience: "PG-13"}} />
            <MovieData {...
                {id:3,
                    key: 3,
                    title: "Die Hard",
                    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Commodo sed egestas egestas fringilla phasellus faucibus. Habitant morbi tristique senectus et. Pretium viverra suspendisse potenti nullam ac tortor vitae. Mauris augue neque gravida in fermentum et. Bibendum enim facilisis gravida neque convallis a cras. Amet massa vitae tortor condimentum lacinia quis vel eros. Quam vulputate dignissim suspendisse in est ante in nibh. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Id diam vel quam elementum pulvinar etiam non quam lacus.",
                    audience: "R"}} />
            </div>
        );
    }
}