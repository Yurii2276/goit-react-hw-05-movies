import React from 'react';

import { Link, useLocation} from 'react-router-dom';

import css from './MoviesList.module.css'

export default function MoviesList({ movies }) {
  const showMovies = Array.isArray(movies) && movies.length;
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {showMovies ?
        (movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <h3 className={css.postListItem}>{movie.title || movie.name}</h3>
              </Link>
            </li>
          );
        })) : (<p>Detailed information about the movie is not available on the server.</p>) }
    </ul>
  );
}
