import React from 'react';

export default function MovieDetailsList({ movie }) {
  const {backdrop_path, genres, overview, release_date, vote_average, title} = movie;
  return (
    <div>
      <div className="movie-details">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
      </div>
      <div className="movie-info">
        <h2>{title}</h2>
        <p>({release_date})</p>
        <p>User Score: {vote_average}</p>
        <p>Overview: {overview}</p>
        <p>Genres: {genres}</p>
        <hr />
        <h3>Additional Information</h3>
        <p>Cast: 0000000000</p>
        <p>Reviews: 000000</p>
      </div>
    </div>
    </div>
  );
}
