import React from 'react';
import MovieCard from '../MovieCard';
import './list.scss';

const MovieList = ({ list }) => (
  <ul className="movie-list">
    {list.map(({ original_title, poster_path, release_date, id }) => (
      <MovieCard
        title={original_title}
        image={poster_path}
        date={release_date}
        key={id}
        id={id}
      />
    ))}
  </ul>
);

export default MovieList;
