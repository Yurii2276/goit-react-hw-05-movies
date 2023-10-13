import MovieDetailsList from '../components/MovieDetailsList';
import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { findMovieDetails } from 'servises/Api';
import Loader from 'components/Loader';

import css from '../components/MovieDetailsList.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async id => {
      try {
        setIsLoading(true);
        const dataMovie = await findMovieDetails(id);
        setMovie(dataMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails(movieId);
  }, [movieId]);

  if (!movie) return;

  return (
    <div>
      <Loader visible={isLoading} />

      {error && <p>Error loading film data from the server.</p>}

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
