import React from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const slicePathName = location.pathname.substring(1);

  return (
    <div>
      <div className="overflow-auto pl-4">
        <div className="float-right">
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
      <div className="bg-[#F8F8F8] text-[##333333] pl-4 h-12 flex items-center capitalize">
        {slicePathName === '' ? 'Home' : slicePathName}
      </div>
    </div>
  );
};

export default NavBar;
