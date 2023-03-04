import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.jpg';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListLink, Poster, Info, Rating } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path, vote_average, release_date }) => (
        <li key={id}>
          <ListLink to={`/movies/${id}`} state={{ from: location }}>
            <Poster
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />
            <Info>
              {title} ({release_date.slice(0, 4)})
              <Rating>{vote_average ? vote_average.toFixed(1) : 'N/A'}</Rating>
            </Info>
          </ListLink>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
