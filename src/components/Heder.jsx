import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Heder.module.css';

export default function heder() {
  return (
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
  );
}
