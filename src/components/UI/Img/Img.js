import React, { useState } from 'react';

import ImgError from '~/assets/image/img_error.jpg';

const Img = ({ linkImg }) => {
  const [addressImg, setAddressImg] = useState(linkImg);

  const handleErrorImg = () => {
    setAddressImg(ImgError);
  };

  return (
    <img
      src={addressImg}
      alt="img"
      onError={handleErrorImg}
      className="h-full w-full object-cover"
    ></img>
  );
};

export default Img;
