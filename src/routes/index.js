import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '~/layout';
import LazyLoading from '~/components/LazyLoading';
// import LogIn from '~/pages/LogIn';
// import Register from '~/pages/Register';
// import Devices from '~/pages/Devices';
// import Dashboards from '~/pages/Dashboards';
// import Customers from '~/pages/Customers';
// import Profile from '~/pages/Profile';
// import Setting from '~/pages/Setting';
// import Support from '~/pages/Support';
const Home = React.lazy(() => import('~/pages/Home'));
const LogIn = React.lazy(() => import('~/pages/LogIn'));
const LostPassword = React.lazy(() => import('~/pages/LostPassword'));
const Register = React.lazy(() => import('~/pages/Register'));
const Devices = React.lazy(() => import('~/pages/Devices'));
const DetailDevice = React.lazy(() => import('~/pages/DetailDevice'));
const Dashboards = React.lazy(() => import('~/pages/Dashboards'));
const DataBuckets = React.lazy(() => import('~/pages/DataBuckets'));
const Endpoints = React.lazy(() => import('~/pages/Endpoints'));
const Assets = React.lazy(() => import('~/pages/Assets'));
const Customers = React.lazy(() => import('~/pages/Customers'));
const DetailCustomer = React.lazy(() => import('~/pages/DetailCustomer'));
const Profile = React.lazy(() => import('~/pages/Profile'));
const Setting = React.lazy(() => import('~/pages/Setting'));
const Document = React.lazy(() => import('~/pages/Document'));

const MainRoutes = () => {
  const routes = [
    {
      path: '/',
      element: Home,
      isLayout: true,
    },
    {
      path: '/log-in',
      element: LogIn,
      isLayout: false,
    },
    {
      path: '/lost-password',
      element: LostPassword,
      isLayout: false,
    },
    {
      path: '/register',
      element: Register,
      isLayout: false,
    },
    {
      path: '/devices',
      element: Devices,
      isLayout: true,
    },
    {
      path: '/devices/:id',
      element: DetailDevice,
      isLayout: true,
    },
    {
      path: '/dashboards',
      element: Dashboards,
      isLayout: true,
    },
    {
      path: '/data-buckets',
      element: DataBuckets,
      isLayout: true,
    },
    {
      path: '/endpoints',
      element: Endpoints,
      isLayout: true,
    },
    {
      path: '/assets',
      element: Assets,
      isLayout: true,
    },
    {
      path: '/customers',
      element: Customers,
      isLayout: true,
    },
    {
      path: '/customers/:id',
      element: DetailCustomer,
      isLayout: true,
    },
    {
      path: '/profile',
      element: Profile,
      isLayout: true,
    },
    {
      path: '/setting',
      element: Setting,
      isLayout: true,
    },
    {
      path: '/document',
      element: Document,
      isLayout: true,
    },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        let Element = route.element;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.isLayout ? (
                <Layout>
                  <React.Suspense fallback={<LazyLoading />}>
                    <Element />
                  </React.Suspense>
                </Layout>
              ) : (
                <React.Suspense fallback={<LazyLoading />}>
                  <Element />
                </React.Suspense>
              )
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default MainRoutes;
