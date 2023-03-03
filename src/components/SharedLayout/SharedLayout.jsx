import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Suspense
        fallback={
          <div>
            <Loader />
            <h2>Loading...</h2>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
