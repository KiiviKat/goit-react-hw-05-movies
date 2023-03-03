import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/apiService';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
        toast.error(`${error.message}! Please try again! :(`);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      <Toaster />
    </>
  );
};

export default Home;
