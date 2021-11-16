import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList';
import MainLayout from '../../layout/MainLayout';
import { API_KEY, API_URL } from '../../utils/constants';

const Homepage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <MainLayout>
      <h1>
        Welcome.
        <br />
        Millions of movies, TV shows and people to discover. Explore now.
      </h1>

      <MovieList list={movies} />

      <Link to="/movies">Go to Movies</Link>
    </MainLayout>
  );
};

export default Homepage;
