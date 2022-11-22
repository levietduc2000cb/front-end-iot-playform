import React from 'react';
import PropTypes from 'prop-types';

import Device from './Device';

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
    <div className="overflow-x-auto relative mx-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
  );
};

Device.propTypes = {
  handleOpenModalDeleteDevice: PropTypes.func,
};

export default ListDevices;
