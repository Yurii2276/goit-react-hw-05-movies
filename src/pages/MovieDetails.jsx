import MovieDetailsList from '../components/MovieDetailsList';
import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { findMovieDetails } from 'servises/Api';

import css from '../components/MovieDetailsList.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async id => {
      try {
        const dataMovie = await findMovieDetails(id);
        setMovie(dataMovie);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchMovieDetails(movieId);
  }, [movieId]);

  if (!movie) return;

  console.log(movie);

  return (
    <div>
      <MovieDetailsList movie={movie} />

      <h3 className={css.castRewiewTitle}>Additional Information</h3>

      <div className={css.castRewiewTitleContanier}>
        <NavLink to="cast" className={css.castRewiewTitle}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.castRewiewTitle}>
          Reviews
        </NavLink>
      </div>
      <hr />

      <Outlet />

    </div>
  );
}
