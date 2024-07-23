// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Rate: {movie.rate}</p>
      <Link to={`/movies/${movie.id}`}>See Details</Link>
    </div>
  );
};

export default MovieCard;
