import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SuperAdminHeader from 'components/superAdminHeader';
import SuperAdminSidebar from 'components/superAdminSidebar';
import { Main } from './styles';

export const SuperAdminLayout = () => {
  return (
    <>
      <SuperAdminHeader />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <SuperAdminSidebar />
      </Main>
    </>
  );
};
