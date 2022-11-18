import React from 'react';

import SideBar from '~/components/SideBar';
import NavBar from '~/components/NavBar';
// import Test from '~/components/Test';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
