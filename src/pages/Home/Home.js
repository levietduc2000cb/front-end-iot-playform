import React from 'react';
import { MdDevicesOther } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-4 bg-[#EEEEEE]">
        <div className="bg-white h-20 rounded-md border-2 border-solid boder-[#305680]">
          <div className="text-sm font-bold text-center leading-7">
            Total Devices
          </div>
          <div className="text-2xl font-bold flex justify-center items-center leading-8">
            <span className="w-10 h-8 flex justify-center items-center">
              <MdDevicesOther />
            </span>
            <span>20</span>
          </div>
        </div>
        <div className="bg-white h-20 rounded-md border-2 border-solid boder-[#305680]">
          <div className="text-sm font-bold text-center leading-7">
            Total Users
          </div>
          <div className="text-2xl font-bold flex justify-center items-center leading-8">
            <span className="w-10 h-8 flex justify-center items-center">
              <FaUsers />
            </span>
            <span>20</span>
          </div>
        </div>
      </div>
      <div className="bg-[#EEEEEE] h-screen">
        <div className="h-full w-full bg-white mx-4 mb-4">
          Giới thiệu các tính năng của IoT Platform
        </div>
      </div>
    </div>
  );
};

export default Home;
