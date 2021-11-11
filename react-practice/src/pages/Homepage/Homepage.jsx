import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';

const Homepage = (props) => {
  console.log('props :>> ', props);
  return (
    <MainLayout>
      <h1>
        Welcome.
        <br />
        Millions of movies, TV shows and people to discover. Explore now.
      </h1>

      <Link to="/movies">Go to Movies</Link>
    </MainLayout>
  );
};

export default Homepage;
