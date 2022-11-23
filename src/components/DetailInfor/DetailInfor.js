import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';

const DetailInfor = ({ title, infor }) => {
  return (
    <div className="gridCustom my-4 text-base">
      <div className="flex items-start justify-end text-black">
        <div className="flex items-center">
          {title}
          <FaInfoCircle className="ml-1" />
        </div>
      </div>
      <div className="leading-5 flex items-center text-black">{infor}</div>
    </div>
  );
};

DetailInfor.propTypes = {
  title: PropTypes.string,
  infor: PropTypes.string,
};

export default DetailInfor;
