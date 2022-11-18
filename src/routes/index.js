import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '~/pages/Home';
import Devices from '~/pages/Devices';
import Dashboards from '~/pages/Dashboards';
import Customers from '~/pages/Customers';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Support from '~/pages/Support';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/devices',
      element: <Devices />,
    },
    {
      path: '/dashboards',
      element: <Dashboards />,
    },
    {
      path: '/customers',
      element: <Customers />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/setting',
      element: <Setting />,
    },
    {
      path: '/support',
      element: <Support />,
    },
  ]);
  return routes;
};

export default Routes;
