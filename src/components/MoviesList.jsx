import React from 'react';

import { Link } from 'react-router-dom';

import css from './MoviesList.module.css'

export default function MoviesList({ movies }) {
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <ul className={css.moviesList}>
      {showMovies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3 className={css.postListItem}>{movie.title || movie.name}</h3>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
