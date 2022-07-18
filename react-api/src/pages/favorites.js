import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import RemoveFavorites from '../components/RemoveFavorites';

const Favorite = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('react-movie-app-favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favorites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favorites}
					handleFavoritesClick={removeFavoriteMovie}
					favoriteComponent={RemoveFavorites}
				/>
			</div>
		</div>
	);
};

export default Favorites;
