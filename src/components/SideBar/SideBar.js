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
  return (
    <div className="w-full max-w-[200px] min-h-screen bg-[#132533]">
      <div className="text-2xl text-white font-extrabold leading-5 h-12 flex justify-center items-center">
        TLU.io
      </div>
      <ul className="text-sm font-bold text-[#709ABB] border-solid border-b-4 border-[#0C1821]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaHome className="text-[#FF00FF]" />
          </div>
          <div className="flex justify-center items-center">Home</div>
        </NavLink>
        <NavLink
          to="/devices"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaRocket className="text-[#08B5FB]" />
          </div>
          <div className="flex justify-center items-center">Devices</div>
        </NavLink>
        <NavLink
          to="/dashboards"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaTachometerAlt className="text-[#009923]" />
          </div>
          <div className="flex justify-center items-center">Dashboards</div>
        </NavLink>
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaUsers className="text-[#FFC40D]" />
          </div>
          <div className="flex justify-center items-center">Customers</div>
        </NavLink>
      </ul>
      <div className="pl-3 text-left text-xs text-[#487497] py-3">Account</div>
      <ul className="text-sm font-bold text-[#709ABB]">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaUserAlt className="text-[#27C24C]" />
          </div>
          <div className="flex justify-center items-center">Profile</div>
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaCogs className="text-[#F05050]" />
          </div>
          <div className="flex justify-center items-center">Setting</div>
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex pl-3 hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div className="w-10 h-10 leading-10 font-black flex justify-center items-center">
            <FaQuestionCircle className="text-[#23B7E5]" />
          </div>
          <div className="flex justify-center items-center">Support</div>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
