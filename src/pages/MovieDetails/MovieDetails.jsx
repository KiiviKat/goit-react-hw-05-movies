import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import placeholder from '../../img/placeholder.jpg';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Heading } from 'components/App.styled';
import {
  GoBackBtn,
  Details,
  DetailsText,
  Highlight,
  Rating,
  DetailsButtons,
  Link,
} from './MovieDetails.styled';

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
  } = details;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>{title}</Heading>
          <GoBackBtn type="button" onClick={handleGoBack}>
            Go back
          </GoBackBtn>
          <Details>
            <img
              src={poster_path ? BASE_IMG_URL + poster_path : placeholder}
              alt={title}
            />

            <div>
              <ul>
                <li>
                  <DetailsText>
                    <Highlight>Overview:</Highlight> {overview}
                  </DetailsText>
                </li>
                <li>
                  <DetailsText>
                    <Highlight>Status:</Highlight> {status}
                  </DetailsText>
                  <DetailsText>
                    <Highlight>Release date:</Highlight>{' '}
                    {new Date(release_date).toLocaleString().slice(0, 10)}
                  </DetailsText>
                  <DetailsText>
                    <Highlight>Runtime:</Highlight> {runtime} minutes
                  </DetailsText>
                </li>
                <li>
                  <DetailsText>
                    <Highlight>Rating:</Highlight>{' '}
                    <Rating>{vote_average}</Rating> based on {vote_count} votes
                  </DetailsText>
                </li>
              </ul>

              <DetailsButtons>
                <Link to="cast" state={{ from: location.state.from }}>
                  Cast
                </Link>
                <Link to="reviews" state={{ from: location.state.from }}>
                  Reviews
                </Link>
              </DetailsButtons>
            </div>
          </Details>
        </>
      )}
      <Outlet />
      <Toaster />
    </>
  );
};

export default MovieDetails;
