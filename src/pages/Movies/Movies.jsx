import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieByName } from 'api/api';
import { Container } from './Movies.styled';

const Movies = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const seacrhQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (seacrhQuery === '' || seacrhQuery === null) {
      return;
    }

    getMovieByName(seacrhQuery.toLowerCase()).then(setMoviesData);
  }, [seacrhQuery]);

  const submitHandler = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.query.value;
    setSearchParams({ query });
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input type="text" name="query" />
        <button type="submit">search</button>
      </form>

      {moviesData && (
        <ul>
          {moviesData.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default Movies;
