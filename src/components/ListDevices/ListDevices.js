import React from 'react';
import PropTypes from 'prop-types';
import { FaListAlt } from 'react-icons/fa';

import Device from './Device';
import FormSearch from '~/components/FormSearch';

const ListDevices = ({ handleOpenModalDeleteDevice }) => {
  const listDevices = [
    { createdTime: '2022-09-23 21:45:06', name: 'Temperature', customer: null },
    {
      createdTime: '2022-09-23 21:45:06',
      name: 'Humidity',
      customer: 'Duy Chiến',
    },
  ];

  return (
    <div>
      <div className="h-11 flex items-center bg-[#F6F8F8] text-base mx-4 pl-2">
        Device List
        <FaListAlt className="ml-2 text-[#98A6AD]" />
      </div>
      <div className="flex justify-end my-1">
        <div className="w-1/3 mr-4">
          <FormSearch></FormSearch>
        </div>
      </div>
      <div className="relative mx-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Created time
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Customer
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {listDevices.map((device, index) => {
              return (
                <Device
                  key={index}
                  idDevice={index.toString()}
                  createdTime={device.createdTime}
                  name={device.name}
                  onClickHandleOpenDelete={handleOpenModalDeleteDevice}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListDevices.propTypes = {
  handleOpenModalDeleteDevice: PropTypes.func,
};

export default ListDevices;
