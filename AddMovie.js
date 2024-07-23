// src/components/AddMovie.js
import React, { useState } from 'react';

const AddMovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rate: 0,
    trailerURL: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rate: 0, trailerURL: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="Rate"
        value={newMovie.rate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="trailerURL"
        placeholder="Trailer URL"
        value={newMovie.trailerURL}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
