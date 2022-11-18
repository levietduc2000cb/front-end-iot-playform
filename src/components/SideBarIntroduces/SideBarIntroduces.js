import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAddCircle } from 'react-icons/io';

import Background_iot_platform from '~/assets/image/background_iot_platform.JPG';

const SideBarIntroduces = ({ title, content, contentBtn, handleClick }) => {
  return (
    <div className="w-full p-12">
      <div className="flex items-center px-9">
        <div className="max-w-[500px] w-full text-left mr-12">
          <div className="text-4xl font-medium leading-10">{title}</div>
          <div className="text-[#58666e] text-lg font-medium leading-5 mt-4 mb-10">
            {content}
          </div>
          <button
            className="flex items-center justify-center bg-[#27C24C] hover:bg-[#23ad44] border-none outline-none w-[197px] h-[48px] rounded-full"
            onClick={handleClick}
          >
            <IoMdAddCircle className="text-[#ffffff] w-[18px] h-[18px] mr-1" />
            <span className="text-[#ffffff] text-lg  leading-6 font-medium">
              {contentBtn}
            </span>
          </button>
        </div>
        <div>
          <img
            src={Background_iot_platform}
            alt="background_iot_platform"
            className="w-[600px] h-[480px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

SideBarIntroduces.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentBtn: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SideBarIntroduces;
