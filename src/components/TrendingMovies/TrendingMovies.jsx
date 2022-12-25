import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'index';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendingMovies;
