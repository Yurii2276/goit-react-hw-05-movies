import React from 'react';

import css from './MovieDetailsList.module.css';

export default function MovieDetailsList({ movie }) {
  const data = movie.release_date;
  const year = data.substring(0, 4);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <div className={css.movieDetails}>
        <div className={css.moviePoster}>
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div className={css.movieInfo}>
          <h2>
            {movie.title} {year}
          </h2>

          <p className={css.moveData}>
            User Score:{' '}
            <span className={css.movieDetails}>{movie.vote_average ? Math.round((movie.vote_average * 100) / 10) : '...'}%</span>
          </p>
          <p className={css.moveData}>
            Overview: <span className={css.movieDetails}>{movie.overview}</span>
          </p>
          <p className={css.moveData}>
            Genres:{' '}
            <span className={css.movieDetails}>
              {movie.genres.map(genre => genre.name).join(', ')}
            </span>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
