import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HeaderLayout from './HeaderLayout/HeaderLayout';
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
