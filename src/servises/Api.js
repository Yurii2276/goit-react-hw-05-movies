import axios from 'axios';

const API_KEY = '50d2af5e3ae02b0ae2f4278d3626056f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const DAY_TREND_FILM = 'trending/all/day';
const DETAIL_FILM = 'movie/';
const CAST_SET = '/credits';
const REWIEWS_SET = '/reviews';

export const findTrendMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}${DAY_TREND_FILM}?api_key=${API_KEY}`
  );
  return data;
};

export const findMovieDetails = async (movie_id) => {
    const { data } = await axios.get(
      `${BASE_URL}${DETAIL_FILM}${movie_id}?api_key=${API_KEY}`
    );
    return data;
  };

  export const findCast = async (movie_id) => {
    const { data } = await axios.get(
      `${BASE_URL}${DETAIL_FILM}${movie_id}${CAST_SET}?api_key=${API_KEY}`
    );
    return data;
  };

  export const findReviews = async (movie_id) => {
    const { data } = await axios.get(
      `${BASE_URL}${DETAIL_FILM}${movie_id}${REWIEWS_SET}?api_key=${API_KEY}`
    );
    return data;
  };
