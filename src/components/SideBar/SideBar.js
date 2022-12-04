import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaRocket,
  FaTachometerAlt,
  FaUsers,
  FaDatabase,
  FaServer,
  FaBuilding,
  FaUserAlt,
  FaCogs,
  FaQuestionCircle,
} from 'react-icons/fa';

const SideBar = ({ hideMenu }) => {
  return (
    <div
      className={`w-full ${
        hideMenu ? 'max-w-[62px]' : 'max-w-[200px]'
      } min-h-screen bg-[#132533]`}
    >
      <div className="text-2xl text-white font-extrabold leading-5 h-12 flex justify-center items-center">
        TLU
        <span className={`${hideMenu ? 'hidden' : 'inline-block'}`}>.io</span>
      </div>
      <ul className="text-sm font-bold text-[#709ABB] border-solid border-b-4 border-[#0C1821]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaHome className="text-[#FF00FF]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Home
          </div>
        </NavLink>
        <NavLink
          to="/devices"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaRocket className="text-[#08B5FB]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Devices
          </div>
        </NavLink>
        <NavLink
          to="/dashboards"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaTachometerAlt className="text-[#009923]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Dashboards
          </div>
        </NavLink>
        <NavLink
          to="/data-buckets"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaDatabase className="text-[#BDC3C7]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Data Buckets
          </div>
        </NavLink>
        <NavLink
          to="/endpoints"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaServer className="text-[#FFC40D]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Endpoints
          </div>
        </NavLink>
        <NavLink
          to="/assets"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaBuilding className="text-white" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Assets
          </div>
        </NavLink>
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaUsers className="text-[#FFC40D]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Customers
          </div>
        </NavLink>
      </ul>
      <div
        className={`pl-3 text-left text-xs text-[#487497] py-3 ${
          hideMenu ? 'hidden' : 'block'
        }`}
      >
        Account
      </div>
      <ul className="text-sm font-bold text-[#709ABB]">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaUserAlt className="text-[#27C24C]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Profile
          </div>
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaCogs className="text-[#F05050]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Setting
          </div>
        </NavLink>
        <NavLink
          to="/document"
          className={({ isActive }) =>
            `flex ${
              hideMenu ? 'pl-0' : 'pl-3'
            } hover:bg-[#0e1d29] hover:text-white cursor-pointer ${
              isActive && 'bg-[#0C1821] text-white'
            }`
          }
        >
          <div
            className={`${
              hideMenu ? 'w-16 h-[50px]' : 'w-10 h-10'
            }  leading-10 font-black flex justify-center items-center`}
          >
            <FaQuestionCircle className="text-[#23B7E5]" />
          </div>
          <div
            className={`flex justify-center items-center ${
              hideMenu ? 'hidden' : 'block'
            }`}
          >
            Document
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  hideMenu: PropTypes.bool,
};

export default SideBar;
