import React, { useState } from 'react';	
	import { useRouteMatch, Link } from 'react-router-dom'
	import MovieCard from './MovieCard'
  
  const MovieList = props => {
	console.log(props.movies)
  
  return (
	<div className="movie-list">
	{/* {props.movies !== undefined ? 
	props.movies.map(movie => <MovieDetails key={movie.id} movie={movie} />)
	: ''
	} */}
	{props.movies.map(movie => <MovieDetails key={movie.id} movie={movie} />)}
	{/* {props.movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)} */}
	</div>
	);
	}
  
  function MovieDetails({ movie }) {
	const { title, director, metascore } = movie;
   
  return (
	<div className="movie-card">
	<Link to={`/movies/${movie.id}`}>Details</Link>
	<h2>{title}</h2>
	<div className="movie-director">
	Director: <em>{director}</em>
	</div>
	<div className="movie-metascore">
	Metascore: <strong>{metascore}</strong>
	</div>
	</div>
	);
	}
	export default MovieList;
