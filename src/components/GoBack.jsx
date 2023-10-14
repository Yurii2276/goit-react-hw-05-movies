import React from 'react';
import css from './GoBack.module.css';
import { Link } from 'react-router-dom';


export default function GoBack({from}) {
  return (
    <Link to={from} className={css.btnStyled}>← Back</Link>

  );
}
