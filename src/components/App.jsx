import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Container } from './App.module';
import Loader from './Loader';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Heder from './Heder';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Heder = lazy(() => import('./Heder'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Container>

      <Heder />

      <Suspense fallback={<Loader />}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>

      </Suspense>

    </Container>

  );
};
