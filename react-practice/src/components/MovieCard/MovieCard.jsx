import React from 'react';
import { Link } from 'react-router-dom';
import './movieCard.scss';

const MovieCard = ({ title, image, date, id }) => {
  return (
    <Link to={`movies/${id}`} className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />

        <p>{title}</p>
        <p>Release date: {date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
