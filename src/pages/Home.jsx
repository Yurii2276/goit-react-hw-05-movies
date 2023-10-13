import React, { useEffect, useState } from 'react';

import css from './home.module.css';

import MoviesList from 'components/MoviesList';

import { findTrendMovies } from 'servises/Api';

import Loader from 'components/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setIsLoading(true);
        const dataMovies = await findTrendMovies();
        setMovies(dataMovies.results);
      } catch (error) {
        console.error('An error occurred while fetching trend movies:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      <Loader visible={isLoading} />
      {error && <p className={css.error}>{error}</p>}
      <h2 className={css.moviesListTitle}>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
