import React from 'react';
import { FaRocket, FaInfoCircle } from 'react-icons/fa';

import DetailInfor from '~/components/DetailInfor';

const DetailDevice = () => {
  const inforDeviceConfiguration = [
    { title: 'Device Type', infor: 'Tempurate' },
    { title: 'Access Token', infor: '134567876543' },
    { title: 'Device Id', infor: '121241241' },
  ];

  const inforDevice = [
    { title: 'Device Name', infor: 'Tempurate' },
    {
      title: 'Device Description',
      infor:
        'Cảm biến nhiệt độ là một thiết bị RTD (đầu dò điện trở) hoặc là cặp nhiệt điện giúp đo sự biến đổi về nhiệt độ của vật cần đo. Khi nhiệt độ có sự thay đổi lớn thì các cảm biến sẽ đưa ra một tín hiệu, từ đó các bộ đọc sẽ đọc và quy ra thành một con số cụ thể',
    },
  ];

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
          {inforDeviceConfiguration.map((infor, index) => {
            return (
              <DetailInfor
                key={index}
                title={infor.title}
                infor={infor.infor}
              />
            );
          })}
          <div className="gridCustom">
            <div></div>
            <div className="text-base font-bold leading-5 flex items-center text-black py-5">
              <FaInfoCircle className="mr-1" />
              Device Information
            </div>
          </div>
          {inforDevice.map((infor, index) => {
            return (
              <DetailInfor
                key={index}
                title={infor.title}
                infor={infor.infor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;
