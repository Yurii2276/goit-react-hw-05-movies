import React, { useEffect, useState } from 'react';
import css from '../components/Movies.module.css';
import { ReactComponent as IconSearch } from '../assets/image/search.svg';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { findFilm } from 'servises/Api';
import MoviesList from 'components/MoviesList';


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = event => {
    event.preventDefault(); 
    const searchValue = event.currentTarget.elements.query.value;
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) return;

    const fetchFilm = async (query) => {
      try {
        setIsLoading(true);
        const dataFilm = await findFilm(query);
        setMovie(dataFilm.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilm(query);
  }, [query]);

  return (
    <div>
      <form className={css.inputContainer} onSubmit={handleFormSubmit}>
        <label>
          <input className={css.inputStyle} type="text" name="query" required />
        </label>
        <button className={css.btnStyle} type="submit">
          <IconSearch />
        </button>
      </form>

      <Loader visible={isLoading} />
      {error && <p>{error}</p>}
      {movie && <MoviesList movies={movie}/>}

    </div>
  );
}
