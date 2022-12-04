import React from 'react';
import PropTypes from 'prop-types';

const BlockIntroduceDocument = ({ icon, title, subTitle, content }) => {
  let Icon = icon;

  return (
    <a
      href="/"
      target="_blank"
      rel="noopener"
      className="p-[15px] bg-[#FFFFFF]"
    >
      <div className="flex text-[#0174e9] text-lg leading-[18px] items-center">
        <Icon></Icon>
        <span className="ml-[2px]">{title}</span>
      </div>
      <div className="text-[#58666e] leading-[22.8571px] my-[15px]">
        {subTitle}
      </div>
      <p className="text-[#98a6ad] leading-[22.8571px]">{content}</p>
    </a>
  );
};

BlockIntroduceDocument.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default BlockIntroduceDocument;
