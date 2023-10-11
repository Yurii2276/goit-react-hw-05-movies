import { NavLink, Route, Routes } from 'react-router-dom';


import css from './App.module.css';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';


export const App = () => {
  return (
    <div>
      <header className={css.headerContainer}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.headerLinkActive : css.headerLink
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.headerLinkActive : css.headerLink
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
