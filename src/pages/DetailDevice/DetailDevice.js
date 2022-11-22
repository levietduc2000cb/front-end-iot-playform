import React from 'react';
import { FaRocket, FaInfoCircle } from 'react-icons/fa';

const DetailDevice = () => {
  return (
    <div className="bg-[#F0F3F4] pt-6 px-6">
      <div>
        <div className="bg-[#F6F8F8] h-10 flex items-center text-base px-3">
          Device Details
        </div>
        <div className="bg-white px-3 min-h-full">
          <div className="gridCustom">
            <div></div>
            <div className="text-base font-bold leading-5 flex items-center text-black py-5">
              <FaRocket className="mr-1" />
              Device Configuration
            </div>
          </div>
          <div className="gridCustom my-4 text-base">
            <div className="flex items-center justify-end text-black">
              Device Type
              <FaInfoCircle className="ml-1" />
            </div>
            <div className=" leading-5 flex items-center text-black">
              Tempurate
            </div>
          </div>
          <div className="gridCustom my-4 text-base">
            <div className="flex items-center justify-end text-black">
              Device Id
              <FaInfoCircle className="ml-1" />
            </div>
            <div className="leading-5 flex items-center text-black">
              123456789876543234567
            </div>
          </div>
          <div className="gridCustom my-4 text-base">
            <div className="flex items-center justify-end text-black">
              Access Token
              <FaInfoCircle className="ml-1" />
            </div>
            <div className="leading-5 flex items-center text-black">
              134567876543
            </div>
          </div>
          <div className="gridCustom">
            <div></div>
            <div className="text-base font-bold leading-5 flex items-center text-black py-5">
              <FaInfoCircle className="mr-1" />
              Device Information
            </div>
          </div>
          <div className="gridCustom my-4 text-base">
            <div className="flex items-center justify-end text-black">
              Device Name
              <FaInfoCircle className="ml-1" />
            </div>
            <div className=" leading-5 flex items-center text-black">
              Tempurate
            </div>
          </div>
          <div className="gridCustom my-4 text-base">
            <div className="flex items-center justify-end text-black">
              Device Description
              <FaInfoCircle className="ml-1" />
            </div>
            <div className=" leading-5 flex items-center text-black">
              Cảm biến nhiệt độ là một thiết bị RTD (đầu dò điện trở) hoặc là
              cặp nhiệt điện giúp đo sự biến đổi về nhiệt độ của vật cần đo. Khi
              nhiệt độ có sự thay đổi lớn thì các cảm biến sẽ đưa ra một tín
              hiệu, từ đó các bộ đọc sẽ đọc và quy ra thành một con số cụ thể
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;
