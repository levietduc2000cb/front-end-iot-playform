import React from 'react';
import PropTypes from 'prop-types';
import { RiShareLine, RiFolderUserFill } from 'react-icons/ri';
import { MdAssignmentReturn } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Device = ({
  idDevice,
  createdTime,
  name,
  customer = 'Private',
  onClickHandleOpenDelete,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (idDevice) => {
    navigate(`/devices/${idDevice}`);
  };

  return (
    <tr
      className="bg-white border-b cursor-pointer hover:bg-gray-200"
      onClick={() => {
        handleNavigate(idDevice);
      }}
    >
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {createdTime}
      </th>
      <td className="py-4 px-6 text-black">{name}</td>
      <td className="py-4 px-6 text-black">{customer}</td>
      <td className="py-4 text-[#6B6B6B]">
        <div className="text-2xl flex items-center justify-center">
          <div className="relative">
            <RiShareLine className="mx-2 cursor-pointer hover:text-black iconPopup" />
            <div className="invisible iconShowPopup absolute w-28 top-[-100%] left-1/2 translate-x-[-50%] text-xs flex justify-center py-[2px] bg-[#757575] text-white rounded">
              Make device public
            </div>
          </div>
          <div className="relative">
            <RiFolderUserFill className="mx-2 cursor-pointer hover:text-black iconPopup" />
            <div className="invisible iconShowPopup absolute w-28 top-[-100%] left-1/2 translate-x-[-50%] text-xs flex justify-center py-[2px] bg-[#757575] text-white rounded">
              Assign to customer
            </div>
          </div>
          <div className="relative">
            <MdAssignmentReturn className="mx-2 cursor-pointer hover:text-black iconPopup" />
            <div className="invisible iconShowPopup absolute w-36 top-[-100%] left-1/2 translate-x-[-50%] text-xs flex justify-center py-[2px] bg-[#757575] text-white rounded">
              Unassign from customer
            </div>
          </div>
          <div className="relative">
            <AiFillDelete
              className="mx-2 cursor-pointer hover:text-black iconPopup"
              onClick={(e) => {
                e.stopPropagation();
                onClickHandleOpenDelete(idDevice);
              }}
            />
            <div className="invisible iconShowPopup absolute w-11 top-[-100%] left-1/2 translate-x-[-50%] text-xs flex justify-center py-[2px] bg-[#757575] text-white rounded">
              Delete
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

Device.propTypes = {
  idDevice: PropTypes.string,
  createdTime: PropTypes.any,
  name: PropTypes.string,
  customer: PropTypes.string,
  onClickHandleOpenDelete: PropTypes.func,
};

export default Device;
