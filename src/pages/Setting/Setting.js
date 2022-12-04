import React from 'react';
import { ImCheckmark } from 'react-icons/im';

const Setting = () => {
  return (
    <div>
      <div className="text-sm leading-[15px] text-black bg-[#f6f8f8] py-4 border boder-[#DEE5E7] px-4">
        Account Password
      </div>
      <form className="bg-white px-4 pt-4 ">
        <div className="mb-6">
          <label
            htmlFor="currentPassword"
            className="block mb-2 text-sm font-medium text-[#58666e] dark:text-white pointer-events-none leading-5"
          >
            Current Password
          </label>
          <input
            type="text"
            id="currentPassword"
            className="bg-[#E8F0FE] border border-[#27C24C]  outline-none text-black text-sm block w-full p-2.5 cursor-default pointer-events-none"
            value="•••••••••"
            readOnly
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-medium text-[#58666e] dark:text-white leading-5"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter your new password"
            className="bg-white border border-gray-300  outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeatPassword"
            className="block mb-2 text-sm font-medium text-[#58666e] dark:text-white leading-5"
          >
            Repeat Password
          </label>
          <input
            type="password"
            id="repeatPassword"
            placeholder="Repeat your new password"
            className="bg-white border border-gray-300 outline-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button className="text-white text-sm leading-5 flex items-center h-[34px]">
          <span className="w-[34px] h-full flex items-center justify-center bg-[#23AE44]">
            <ImCheckmark />
          </span>
          <span className="bg-[#27C24C] h-full flex items-center px-[14px]">
            Update
          </span>
        </button>
      </form>
    </div>
  );
};

export default Setting;
