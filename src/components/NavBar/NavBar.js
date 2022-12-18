import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FaIndent } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';

import LogoHeader from '~/components/LogoHeader';
import ListSideBar from '~/components/ListSideBar';

const NavBar = ({ handldeHideMenu }) => {
  const location = useLocation();
  const slicePathName = location.pathname.substring(1);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (slicePathName === '') {
      document.title = 'Home';
    } else {
      document.title = `${slicePathName
        .charAt(0)
        .toUpperCase()}${slicePathName.slice(1)}`;
    }
  }, [slicePathName]);

  return (
    <div>
      <div className="h-12 mtb:bg-[#132533]">
        <div className="flex h-full items-center justify-between pl-4 mtb:hidden">
          <div
            className="flex h-full cursor-pointer items-center px-[15px] hover:bg-[#F0F3F4]"
            onClick={handldeHideMenu}
          >
            <FaIndent className="text-[#58666E]" />
          </div>
          <div>
            <div className="flex cursor-pointer items-center px-4 py-1 hover:bg-[rgba(0,0,0,.05)]">
              <div className="mr-6 text-[#58666e]">DucLee</div>
              <img
                src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative hidden h-full items-center justify-between mtb:flex">
          <LogoHeader />
          <div
            className="flex h-full cursor-pointer items-center px-[15px]"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <ImMenu className="text-[#5F8EB3]" />
          </div>
          <div
            className={`absolute top-full w-full bg-[#132533] pb-2 ${
              showMenu ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <ListSideBar hideMenu={false}></ListSideBar>
          </div>
        </div>
      </div>
      <div className="flex h-12 items-center bg-[#F8F8F8] pl-4 capitalize text-[##333333]">
        {slicePathName === '' ? 'Home' : slicePathName}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  handldeHideMenu: PropTypes.func,
};

export default memo(NavBar);
