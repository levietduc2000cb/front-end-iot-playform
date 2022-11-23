import React from 'react';
import PropTypes from 'prop-types';
import { FaListAlt } from 'react-icons/fa';

import FormSearch from '~/components/FormSearch';
import Customer from './Customer';

const ListCustomer = ({ handleOpenModalDeleteCustomer }) => {
  const listCustomers = [
    {
      createdTime: '2022-09-23 21:45:06',
      name: 'Hoang Gia Minh',
      address: 'Hà Nội',
      phoneNumber: '123456789',
    },
  ];

  return (
    <div>
      <div className="h-11 flex items-center bg-[#F6F8F8] text-base mx-4 pl-2">
        Customer List
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
                Address
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {listCustomers.map((customer, index) => {
              return (
                <Customer
                  key={index}
                  idCustomer={index.toString()}
                  createdTime={customer.createdTime}
                  name={customer.name}
                  addressCustomer={customer.address}
                  onClickHandleOpenDelete={handleOpenModalDeleteCustomer}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListCustomer.propTypes = {
  handleOpenModalDeleteCustomer: PropTypes.func,
};

export default ListCustomer;
