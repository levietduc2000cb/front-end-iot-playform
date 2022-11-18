import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '~/layout';
import Home from '~/pages/Home';
import LogIn from '~/pages/LogIn';
import Register from '~/pages/Register';
import Devices from '~/pages/Devices';
import Dashboards from '~/pages/Dashboards';
import Customers from '~/pages/Customers';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Support from '~/pages/Support';

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
      path: '/dashboards',
      element: Dashboards,
      isLayout: true,
    },
    {
      path: '/customers',
      element: Customers,
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
      path: '/support',
      element: Support,
      isLayout: true,
    },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        let Element = route.element;
        return (
          <Route
            path={route.path}
            element={
              route.isLayout ? (
                <Layout>
                  <Element />
                </Layout>
              ) : (
                <Element />
              )
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default MainRoutes;
