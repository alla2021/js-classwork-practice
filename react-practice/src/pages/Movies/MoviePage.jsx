import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { API_KEY, API_URL } from '../../utils/constants';

const Movies = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${API_URL}movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  console.log('data :>> ', data);

  return (
    <MainLayout>
      <Link to="/">Go to Homepage</Link>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.original_title}
        width="100%"
      />
      <h1>{data.original_title}</h1>
      <p>{data.overview}</p>
      <p>Release date: {data.release_date}</p>
      <a target="_blank" href={data.homepage} rel="noreferrer">
        {data.homepage}
      </a>
    </MainLayout>
  );
};

export default Movies;
