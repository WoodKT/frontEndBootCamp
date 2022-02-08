//a component that represents movie data (i.e. image, synopsis, rating, etc…)
import React from 'react';
import MovieList from './movieList';

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <MovieList />
            </div>
        );
    }
}