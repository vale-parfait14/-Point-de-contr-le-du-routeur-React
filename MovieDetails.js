// src/components/MovieDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rate: {movie.rate}</p>
      <div className="trailer">
        <h2>Trailer</h2>
        <iframe src={movie.trailerURL} title={movie.title} frameBorder="0" allowFullScreen></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
