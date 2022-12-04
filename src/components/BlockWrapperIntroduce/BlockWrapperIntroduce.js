import React from 'react';
import PropTypes from 'prop-types';

import BlockIntroduceFeature from './BlockIntroduceFeature';
import BlockIntroduceDocument from './BlockIntroduceDocument';

const BlockWrapperIntroduce = ({ title1, content1, title2, content2 }) => {
  return (
    <div className="bg-[#F0F3F4] pb-[71px]">
      <div className="px-[50px] pt-[50px]">
        <h3 className="text-[#3a3f51] text-2xl font-medium leading-[26.4px] mb-[50px]">
          {title1}
        </h3>
        <div className="grid grid-cols-3 gap-[50px]">
          {content1.map((contentChild, index) => {
            return (
              <BlockIntroduceFeature
                key={index}
                icon={contentChild.icon}
                title={contentChild.title}
                content={contentChild.content}
              ></BlockIntroduceFeature>
            );
          })}
        </div>
      </div>
      <div className="px-[50px] pt-[90px]">
        <h3 className="text-[#3a3f51] text-2xl font-medium leading-[26.4px] mb-[31px]">
          {title2}
        </h3>
        <div className="grid grid-cols-4 gap-[27px]">
          {content2.map((contentChild, index) => {
            return (
              <BlockIntroduceDocument
                key={index}
                icon={contentChild.icon}
                title={contentChild.title}
                subTitle={contentChild.subTitle}
                content={contentChild.content}
              ></BlockIntroduceDocument>
            );
          })}
        </div>
      </div>
    </div>
  );
};

BlockWrapperIntroduce.propTypes = {
  title1: PropTypes.string,
  content1: PropTypes.array,
  title2: PropTypes.string,
  content2: PropTypes.array,
};

export default BlockWrapperIntroduce;
