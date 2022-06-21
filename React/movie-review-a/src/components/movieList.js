import React from "react";
import MovieData from "./movieData";

export default class MovieList extends React.Component {
    render() {
        return (
            //<div className="movieList container">
            <div className="d-flex flex-wrap align-items-center justify-content-center"> 
            <MovieData {...
                {id: 1,
                    key:1,
                    title: "Spirit",
                    synopsis: "A horse",
                    audience: "G"}} />
            <MovieData {...
                {id:2,
                    key:2,
                    title: "A Little Princess",
                    synopsis: "A Princess",
                    audience: "PG-13"}} />
            <MovieData {...
                {id:3,
                    key: 3,
                    title: "Die Hard",
                    synopsis: "Dying Hard",
                    audience: "R"}} />
            </div>
        );
    }
}