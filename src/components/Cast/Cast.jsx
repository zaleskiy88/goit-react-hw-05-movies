import { getActors } from 'index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultGalleryImg from 'ui/defaultGalleryImg.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path === null
                      ? defaultGalleryImg
                      : `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  }
                  alt={`${actor.name} foto`}
                  width={150}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any infromation about actors for this movie</p>
      )}
    </>
  );
};

export default Cast;
