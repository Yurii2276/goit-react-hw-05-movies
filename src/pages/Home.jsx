import React, { useEffect, useState } from 'react';

import css from './home.module.css';

import MoviesList from 'components/MoviesList';

import { findTrendMovies } from 'servises/Api';

export default function Home() {

  const [movies, setMovies] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const dataMovies = await findTrendMovies();
        setMovies(dataMovies.results);
        console.log(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        
      }
    };

    fetchTrendMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div>

    {error && <p className={css.error}>{error}</p>}
    <h2 className={css.moviesListTitle}>Trending today</h2>
    <MoviesList movies={movies}/>

  </div>
  );
  
}
