//MovieGallery
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Showcard from './components/Showcard';



const Shows = () => {
const [movies, setMovies] = useState([]);

 useEffect(() => {
    fetchMovies();
  }, []);

 const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:7000/show');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


  const [filter, setFilter] = useState('latest');
  const [genreFilter, setGenreFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleGenreFilterChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(parseFloat(event.target.value));
  };

  // Apply filters based on the selected option
  let filteredMovies = [...movies];

  if (filter === 'latest') {
    filteredMovies.sort((a, b) => new Date(b.selectedDate) - new Date(a.selectedDate));
  } else if (filter === 'genre') {
    filteredMovies = genreFilter
      ? movies.filter((movie) => movie.gener === genreFilter)
      : [...movies];
  } else if (filter === 'rating') {
    filteredMovies = ratingFilter
      ? movies.filter((movie) => movie.rating >= ratingFilter)
      : [...movies];
  }

  return (
    <div className='bg-dark'>
      <h1 className="text-center fs-1 text-danger">Show Gallery</h1>
      <div>
        <label className='bg-danger p-3 ms-5 rounded-pill text-white'>Apply FILTER:</label>
        <select className='bg-warning p-3 ms-5 rounded-pill text-dark' value={filter} onChange={handleFilterChange}>
          <option value="latest">Latest</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
        </select>
        {filter === 'genre' && (
          <select  className='bg-dark p-2 ms-3 rounded-pill text-secondary' value={genreFilter} onChange={handleGenreFilterChange}>
            <option value="">All Genres</option>
            <option value="romance">Romance</option>
            <option value="drama">Drama</option>
	          <option value="action">Action</option>
          </select>
        )}
        {filter === 'rating' && (
          <input className='bg-success p-2 ms-3 rounded-pill text-white'
            type="number"
            step="0.5"
            min="0"
            max="10"
            value={ratingFilter}
            onChange={handleRatingFilterChange}
          />
        )}
      </div>
      <br />
      <hr />
	<h1 className="text-center  fs-3 text-secondary">Shows List</h1><br/>
      
	<div className="movie-gallery  bg-danger shadow p-3 bg-body rounded border border-danger rounded-pill border-2 shadow p-3 " style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
        {filteredMovies.map((movie) => (
          <Showcard key={movie.id} {...movie}/>
        ))}
      </div>
    </div>
  );
};

export default Shows;
