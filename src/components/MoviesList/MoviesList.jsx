import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.jpg';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, poster_path, vote_average, release_date }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />
            <p>
              {title} ({release_date.slice(0, 4)})
              <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
