import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'index';
import {
  Image,
  Button,
  ButtonLink,
  AddInfoWrapper,
} from './MovieDetails.styled';
import { Container } from 'pages/Movies/Movies.styled';
import { FiArrowLeft } from 'react-icons/fi';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovieData);
  }, [movieId]);

  const genres = data => {
    if (!data.genres) {
      return;
    }
    return data.genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      {movieData.poster_path !== undefined && (
        <>
          <Container>
            <ButtonLink
              to={
                location.state?.from !== null
                  ? location.state.from
                  : `/movies/${movieId}`
              }
            >
              <Button>
                <FiArrowLeft />
                Go back
              </Button>
            </ButtonLink>
            <Image
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              alt="Movie Poster"
              width={200}
            />
            <h2>{movieData.title}</h2>
            <p>
              User Score: {Math.floor(movieData.vote_average * 10) / 10} / 10
            </p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <p>{genres(movieData)}</p>
          </Container>

          <AddInfoWrapper>
            <p>Additional information</p>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </AddInfoWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
