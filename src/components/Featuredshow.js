import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Showcard from './Showcard';


const FeaturedMoviesPage = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    
    axios.get('https://show-79ll.onrender.com/show')
      .then(response => {
        // Filter movies where the 'featured' key is set to 'yes'
        const featuredMoviesData = response.data.filter(movie => movie.featured === 'Yes');
        setFeaturedMovies(featuredMoviesData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div>
      <h1 className="text-center text-danger">Featured Movies</h1>
      <div className="movie-gallery bg-dark" style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
      {featuredMovies.map(movie => (
        <Showcard key={movie.id} {...movie}/>
      ))}
      </div>
      </div>
    </>
  );
};




export default FeaturedMoviesPage;
