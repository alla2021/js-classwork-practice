import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';

const Movies = () => {
  return (
    <MainLayout>
      <h1>Movies</h1>

      <Link to="/">Go to Homepage</Link>
    </MainLayout>
  );
};

export default Movies;
