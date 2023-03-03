import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
  );
};
