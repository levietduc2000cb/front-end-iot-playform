import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdAddCircle } from 'react-icons/io';

const ButtonCreateForm = ({ contentBtn, elementForm }) => {
  let ElementForm = elementForm;
  const [openModalCreateForm, setOpenModalCreateForm] = useState(false);

  const handleOpenModalCreateForm = () => {
    setOpenModalCreateForm(true);
  };

  const handleCloseModalCreateForm = () => {
    setOpenModalCreateForm(false);
  };

  return (
    <>
      <button
        className="flex items-center justify-center bg-[#27C24C] hover:bg-[#23ad44] border-none outline-none w-[197px] h-[48px] rounded-full"
        onClick={handleOpenModalCreateForm}
      >
        <IoMdAddCircle className="text-[#ffffff] w-[18px] h-[18px] mr-1" />
        <span className="text-[#ffffff] text-lg  leading-6 font-medium">
          {contentBtn}
        </span>
      </button>
      {openModalCreateForm && (
        <ElementForm handleClickCLoseModal={handleCloseModalCreateForm} />
      )}
    </>
  );
};

ButtonCreateForm.propTypes = {
  contentBtn: PropTypes.string,
  elementForm: PropTypes.func,
};

export default ButtonCreateForm;
