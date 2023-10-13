import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { findCast } from '../servises/Api';

import css from '../components/Cast.module.css';

import Loader from 'components/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCasts = async id => {
      try {
        setIsLoading(true);
        const dataCasts = await findCast(id);
        setCasts(dataCasts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCasts(movieId);
  }, [movieId]);

  if (!casts) return;

  const castsArray = [...casts.cast];
  const showCasts = Array.isArray(castsArray) && castsArray.length;

  return (
    <div>
       <Loader visible={isLoading} />
      {error && <p>Error loading film data from the server.</p>}
      
      <ul className={css.castList}>
        {showCasts ?
          (castsArray.map(cast => {
            return (
              <li key={cast.cast_id}>
                <img
                  className={css.imgStyle}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="poster"
                />

                <p className={css.castListItem}>{cast.name}</p>
                <p className={css.castListItem}>Character: {cast.character}</p>
              </li>
            );
          })) : <p>The server does not have data about the actors who starred in this film.</p> }
      </ul>
    </div>
  );
}
