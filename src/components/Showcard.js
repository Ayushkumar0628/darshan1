import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from '@mui/material';
import './showcard.css';

const Showcard=(curElem)=> {

  const {id, title, rating, gener, selectedDate, pic } = curElem;
  const posterImageClass = 'img-fluid rounded';

  return (
    <div className="card movie-card">
      
      <img src={pic} alt={title} className="card-img-top movie-card__poster" />

      {/* Card body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Genre: {gener}</p>
        <p className="card-text">Rating: {rating}</p>
        <p className="card-text">Release Date: {selectedDate}</p>
        <NavLink to={`/singlevideo/${id}`}><Button variant="contained">Watch Now</Button></NavLink>
      </div>
    </div>
  );
};

export default Showcard;
