import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.jpg';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setDetails(movieDetails);
      } catch (error) {
        toast.error(`${error.message}! Please try again! :(`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (!details) {
    return null;
  }

  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
    status,
    runtime,
    budget,
    revenue,
  } = details;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{title}</h1>
          <div>
            <button type="button" onClick={handleGoBack}>
              Go back
            </button>

            <img
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />

            <div>
              <ul>
                <li>
                  <p>
                    <span>Overview:</span> {overview}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Status:</span> {status}
                  </p>
                  <p>
                    <span>Runtime:</span> {runtime} minutes
                  </p>
                  {!!budget && (
                    <p>
                      <span>Budget:</span>{' '}
                      {budget
                        .toString()
                        .split('')
                        .map((symbol, i, a) =>
                          !((a.length - (i + 1)) % 3) && i + 1 !== a.length
                            ? symbol + ','
                            : symbol
                        )
                        .join('')}
                      $
                    </p>
                  )}
                  {!!revenue && (
                    <p>
                      <span>Revenue:</span>{' '}
                      {revenue
                        .toString()
                        .split('')
                        .map((symbol, i, a) =>
                          !((a.length - (i + 1)) % 3) && i + 1 !== a.length
                            ? symbol + ','
                            : symbol
                        )
                        .join('')}
                      $
                    </p>
                  )}
                  <p>
                    <span>Release date:</span>{' '}
                    {new Date(release_date).toLocaleString().slice(0, 10)}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Rating:</span> <span>{vote_average}</span> based on{' '}
                    {vote_count} votes
                  </p>
                </li>
              </ul>

              <div>
                <Link to="cast" state={{ from: location.state.from }}>
                  Cast
                </Link>
                <Link to="reviews" state={{ from: location.state.from }}>
                  Reviews
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <Outlet />
      <Toaster />
    </>
  );
};

export default MovieDetails;
