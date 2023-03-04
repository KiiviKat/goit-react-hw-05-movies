import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './SharedLayout.styled';
import { Heading } from 'components/App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <Wrapper>
            <Loader />
            <Heading as={'h2'}>Loading...</Heading>
          </Wrapper>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
