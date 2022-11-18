import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaRocket,
  FaTachometerAlt,
  FaUsers,
  FaUserAlt,
  FaCogs,
  FaQuestionCircle,
} from 'react-icons/fa';

const SideBar = () => {
  const listMainSideBar = [
    {
      path: '/',
      icon: FaHome,
      color: '#FF00FF',
      title: 'Home',
    },
    {
      path: '/devices',
      icon: FaRocket,
      color: '#08B5FB',
      title: 'Devices',
    },
    {
      path: '/dashboards',
      icon: FaTachometerAlt,
      color: '#009923',
      title: 'Dashboards',
    },
    {
      path: '/customers',
      icon: FaUsers,
      color: '#FFC40D',
      title: 'Customers',
    },
  ];

  const listAdministrationSideBar = [
    {
      path: '/profile',
      icon: FaUserAlt,
      color: '#27C24C',
      title: 'Profile',
    },
    {
      path: '/setting',
      icon: FaCogs,
      color: '#F05050',
      title: 'Setting',
    },
    {
      path: '/support',
      icon: FaQuestionCircle,
      color: '#23B7E5',
      title: 'Support',
    },
  ];

  const handleIcon = (icon, color) => {
    let Icon = icon;

    return <Icon className={`text-[${color}]`}></Icon>;
  };

  return (
    <div className="w-full max-w-[200px] min-h-screen bg-[#132533]">
      <div className="text-2xl text-white font-extrabold leading-5 h-12 flex justify-center items-center">
        TLU.io
      </div>
      <ul className="text-sm font-bold text-[#709ABB] border-solid border-b-4 border-[#0C1821]">
        {listMainSideBar.map((mainSideBar, index) => {
          return (
            <NavLink
              key={index}
              to={mainSideBar.path}
              className={({ isActive }) =>
                `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
                  isActive && 'bg-[#0C1821] text-white'
                }`
              }
            >
              <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
                {handleIcon(mainSideBar.icon, mainSideBar.color)}
              </div>
              <div className="flex justify-center items-center">
                {mainSideBar.title}
              </div>
            </NavLink>
          );
        })}
      </ul>
      <div className="pl-3 text-left text-xs text-[#487497] py-3">
        Administration
      </div>
      <ul className="text-sm font-bold text-[#709ABB]">
        {listAdministrationSideBar.map((administrationSideBar, index) => {
          return (
            <NavLink
              key={index}
              to={administrationSideBar.path}
              className={({ isActive }) =>
                `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
                  isActive && 'bg-[#0C1821] text-white'
                }`
              }
            >
              <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
                {handleIcon(
                  administrationSideBar.icon,
                  administrationSideBar.color,
                )}
              </div>
              <div className="flex justify-center items-center">
                {administrationSideBar.title}
              </div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
