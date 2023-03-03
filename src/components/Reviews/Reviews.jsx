import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constants';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
        toast.error(`Oh boy, it's ${error.message}! Please try again!`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <>
      <h2>Reviews</h2>
      {isLoading ? (
        <Loader />
      ) : !!reviews.length ? (
        <ul>
          {reviews.map(
            ({
              id,
              author,
              content,
              created_at,
              author_details: { avatar_path },
            }) => {
              if (!avatar_path) {
                avatar_path =
                  '/https://msf-theeltal.de/wp-content/uploads/2018/04/no-avatar.jpg';
              }

              return (
                <li key={id}>
                  <div>
                    <img
                      src={
                        avatar_path.includes('https')
                          ? avatar_path.slice(1)
                          : BASE_IMG_URL + avatar_path
                      }
                      alt={`${author}'s avatar`}
                    />
                    <div>
                      <h3>{author}</h3>
                      <span>{new Date(created_at).toLocaleString()}</span>
                    </div>
                  </div>
                  <span>{content}</span>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p>No reviews!</p>
      )}
      <Toaster />
    </>
  );
};

export default Reviews;
