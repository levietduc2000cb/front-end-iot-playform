import React from 'react';
import PropTypes from 'prop-types';

import ButtonCreateForm from '../UI/ButtonCreateForm';

import Background_iot_platform from '~/assets/image/background_iot_platform.JPG';

const SideBarIntroduces = ({ title, content, contentBtn, elementForm }) => {
  return (
    <div className="w-full p-12">
      <div className="flex items-center px-9">
        <div className="max-w-[500px] w-full text-left mr-12">
          <div className="text-4xl font-medium leading-10">{title}</div>
          <div className="text-[#58666e] text-lg font-medium leading-5 mt-4 mb-10">
            {content}
          </div>
          <ButtonCreateForm
            contentBtn={contentBtn}
            elementForm={elementForm}
          ></ButtonCreateForm>
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
  elementForm: PropTypes.func,
};

export default SideBarIntroduces;
