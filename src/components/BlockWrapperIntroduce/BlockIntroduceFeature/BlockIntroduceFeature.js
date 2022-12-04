import React from 'react';
import PropTypes from 'prop-types';

const BlockIntroduceFeature = ({ icon, title, content }) => {
  let Icon = icon;

  return (
    <div>
      <Icon className="text-[28px] text-[#0174e9] leading-7 mb-8"></Icon>
      <h4 className="text-[#0174e9] text-lg font-medium leading-5 mb-[30px]">
        {title}
      </h4>
      <p className="text-[#58666e] leading-[22.8571px]">{content}</p>
    </div>
  );
};

BlockIntroduceFeature.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default BlockIntroduceFeature;
