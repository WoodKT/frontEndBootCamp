import React from "react";
import MovieData from "./movieData";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{
                title: "Spirit",
                synopsis: "A horse",
                audience: "G",
                reviews: []
            },
            {
                title: "A Little Princess",
                synopsis: "A Princess",
                audience: "PG-13",
                reviews: []
            },
            {
                title: "Die Hard",
                synopsis: "Dying Hard",
                audience: "R",
                reviews: []
            }]
        };
    };
    render() {
        let movies;

        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <MovieData key={index} {...movie} />);
        }
        return (
            <div className="d-flex flex-wrap align-items-center justify-content-center">
                {movies}
            </div>
        )
    }  
}