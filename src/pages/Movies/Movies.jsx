import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { getMoviesByQuery } from 'services/apiService';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (!searchQuery) {
      return;
    }

    const fetchMoviesByQuery = async () => {
      try {
        const moviesByQuery = await getMoviesByQuery(
          searchQuery.trim().toLowerCase()
        );
        if (!moviesByQuery.length) {
          throw new Error('Bad Query');
        }
        setMovies(moviesByQuery);
      } catch (error) {
        toast.error(`${error.message}! Please try again! :(`);
      } finally {
        setIsLoading(false);
        setQuery(searchQuery.trim().toLowerCase());
      }
    };

    fetchMoviesByQuery();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!query) {
      toast.error(`Enter what you're looking for! :)`);
      return;
    }

    if (
      searchParams.get('query')?.trim().toLowerCase() ===
      query.trim().toLowerCase()
    ) {
      toast.error(`Try something else! :)`);
      return;
    }
    setIsLoading(true);
    setSearchParams({ query });
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      <Toaster />
    </>
  );
};

export default Movies;
