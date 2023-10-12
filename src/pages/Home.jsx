import React, { useEffect, useState } from 'react';

import css from './home.module.css';

import MoviesList from 'components/MoviesList';

import { findTrendMovies } from 'servises/Api';

export default function Home() {

  const [movies, setMovies] = useState([]);

  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const dataMovies = await findTrendMovies();
        setMovies(dataMovies.results);
        
      } catch (error) {
        console.error("An error occurred while fetching trend movies:", error);
        setError(error.message);
      } finally {
        
      }
    };

    fetchTrendMovies();
   
  }, []); 

  console.log(movies);

  return (
    <div>

    {error && <p className={css.error}>{error}</p>}
    <h2 className={css.moviesListTitle}>Trending today</h2>
    <MoviesList movies={movies}/>

  </div>
  );
  
}
