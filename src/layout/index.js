import React, { useState } from 'react';

import SideBar from '~/components/SideBar';
import NavBar from '~/components/NavBar';
// import Test from '~/components/Test';

const Layout = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);

  const handldeHideMenu = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <div className="flex">
      <SideBar hideMenu={hideMenu} />
      <div className="flex-1">
        <NavBar handldeHideMenu={handldeHideMenu} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
