// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import MovieDetails from './MovieDetails';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan',
      posterURL: 'https://example.com/inception.jpg',
      rate: 9,
      trailerURL: 'https://www.youtube.com/embed/8hP9D6kZseM'
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A space epic by Christopher Nolan',
      posterURL: 'https://example.com/interstellar.jpg',
      rate: 8,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    }
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rate: 0,
  });

  const handleFilter = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rate >= filter.rate
  );

  return (
    <Router>
      <div className="App">
        <h1>My Movie App</h1>
        <Filter handleFilter={handleFilter} />
        <AddMovie handleAddMovie={handleAddMovie} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
