import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormCreateDevice = ({ handleClickCLoseModal }) => {
  const formik = useFormik({
    initialValues: {
      deviceName: '',
      deviceDes: '',
      deviceCustomer: '',
    },
    validationSchema: Yup.object({
      deviceName: Yup.string().required("You must fill device's name"),
      deviceDes: Yup.string().required("You must fill device's description"),
      deviceCustomer: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log({ values });
      //Đây là xử lý tạo thiết bị
      formik.handleReset();
    },
  });

  const clickCloseModal = () => {
    formik.handleReset();
    handleClickCLoseModal();
  };

  return (
    <form className="pb-5" onSubmit={formik.handleSubmit}>
      <div className="text-white font-bold text-2xl h-16 bg-[#132533] flex items-center justify-between mb-8">
        <div className="pl-6">Add new device</div>
        <div className="pr-6 cursor-pointer" onClick={clickCloseModal}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="px-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="deviceName"
            id="deviceName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formik.values.deviceName}
            onChange={formik.handleChange}
          />
          {formik.errors.deviceName && formik.touched.deviceName && (
            <p className="text-red-600 text-left">{formik.errors.deviceName}</p>
          )}
          <label
            htmlFor="deviceName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Device's name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="deviceDes"
            id="deviceDes"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formik.values.deviceDes}
            onChange={formik.handleChange}
          />
          {formik.errors.deviceDes && formik.touched.deviceDes && (
            <p className="text-red-600 text-left">{formik.errors.deviceDes}</p>
          )}
          <label
            htmlFor="deviceDes"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Device's description
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="deviceCustomer"
            id="deviceCustomer"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formik.values.deviceCustomer}
            onChange={formik.handleChange}
          />
          {formik.errors.deviceCustomer && formik.touched.deviceCustomer && (
            <p className="text-red-600 text-left">
              {formik.errors.deviceCustomer}
            </p>
          )}
          <label
            htmlFor="deviceCustomer"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Device's Customer
          </label>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create a new device
          </button>
          <button
            type="button"
            className="text-white bg-gray-400 ml-2 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={clickCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

FormCreateDevice.propTypes = {
  handleClickCLoseModal: PropTypes.func,
};

export default FormCreateDevice;
