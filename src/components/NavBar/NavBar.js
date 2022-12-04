import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FaIndent } from 'react-icons/fa';

const NavBar = ({ handldeHideMenu }) => {
  const location = useLocation();
  const slicePathName = location.pathname.substring(1);

  return (
    <div>
      <div className="overflow-auto pl-4 h-12">
        <div className="flex justify-between items-center h-full">
          <div
            className="h-full hover:bg-[#F0F3F4] cursor-pointer px-[15px] flex items-center"
            onClick={handldeHideMenu}
          >
            <FaIndent className="text-[#58666E]" />
          </div>
          <div>
            <div className="flex items-center px-4 py-1 hover:bg-[rgba(0,0,0,.05)] cursor-pointer">
              <div className="text-[#58666e] mr-6">DucLee</div>
              <img
                src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"
                alt="avatar"
                className="rounded-full w-10 h-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] text-[##333333] pl-4 h-12 flex items-center capitalize">
        {slicePathName === '' ? 'Home' : slicePathName}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  handldeHideMenu: PropTypes.func,
};

export default NavBar;
