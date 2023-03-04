import { Header, Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};
