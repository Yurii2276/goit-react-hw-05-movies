// import MovieDetailsList from '../components/MovieDetailsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieDetails } from 'servises/Api';

export default function MovieDetails() {

  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async (id) => {
      try {
        const dataMovie = await findMovieDetails(id);
        setMovie(dataMovie);
        console.log(movie);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchMovieDetails(movieId);
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <div>
      MovieDetails component !!!!!!!!!!!

      {/* <MovieDetailsList movie={movie} /> */}
    </div>
  );
}
