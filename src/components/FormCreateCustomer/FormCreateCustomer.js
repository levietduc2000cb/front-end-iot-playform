import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Modal from '~/components/Modal';

const FormCreateCustomer = ({ handleClickCLoseModal }) => {
  const formik = useFormik({
    initialValues: {
      customerFirstName: '',
      customerLastName: '',
      customerDes: '',
      customerAddress: '',
      customerPhoneNumber: '',
      customerEmail: '',
      customerPassword: '',
    },
    validationSchema: Yup.object({
      customerFirstName: Yup.string().required(
        "You must fill customer's first name",
      ),
      customerLastName: Yup.string().required(
        "You must fill customer's last name",
      ),
      customerDes: Yup.string().required(
        "You must fill customer's description",
      ),
      customerAddress: Yup.string().required(
        "You must fill customer's address",
      ),
      customerPhoneNumber: Yup.string().required(
        "You must fill customer's phone number",
      ),
      customerEmail: Yup.string()
        .email('Invalid email')
        .required("You must fill customer's email"),
      customerPassword: Yup.string()
        .min(10, 'Your password must be at least 10 characters')
        .required("You must fill customer's password"),
    }),
    onSubmit: (values) => {
      console.log({ values });
      //Đây là xử lý tạo khách hàng
      formik.handleReset();
    },
  });

  const clickCloseModal = () => {
    formik.handleReset();
    handleClickCLoseModal();
  };

  return (
    <Modal>
      <form
        className="pb-5 w-1/2 bg-white rounded-md"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-white font-bold text-2xl h-16 bg-[#132533] flex items-center justify-between mb-8">
          <div className="pl-6">Add new customer</div>
          <div className="pr-6 cursor-pointer" onClick={clickCloseModal}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="grid md:grid-cols-2 px-6 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="customerFirstName"
              id="customerFirstName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerFirstName}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <label
              htmlFor="customerFirstName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="customerLastName"
              id="customerLastName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerLastName}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <label
              htmlFor="customerLastName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="px-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="customerDes"
              id="customerDes"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerDes}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.customerDes && formik.touched.customerDes && (
              <p className="text-red-600 text-left">
                {formik.errors.customerDes}
              </p>
            )}
            <label
              htmlFor="customerDes"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer's description
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="customerAddress"
              id="customerAddress"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerAddress}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.customerAddress &&
              formik.touched.customerAddress && (
                <p className="text-red-600 text-left">
                  {formik.errors.customerAddress}
                </p>
              )}
            <label
              htmlFor="customerAddress"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer's address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="customerPhoneNumber"
              id="customerPhoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerPhoneNumber}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.customerPhoneNumber &&
              formik.touched.customerPhoneNumber && (
                <p className="text-red-600 text-left">
                  {formik.errors.customerPhoneNumber}
                </p>
              )}
            <label
              htmlFor="deviceCustomer"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer's phone number
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="customerEmail"
              id="customerEmail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerEmail}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.customerEmail && formik.touched.customerEmail && (
              <p className="text-red-600 text-left">
                {formik.errors.customerEmail}
              </p>
            )}
            <label
              htmlFor="customerEmail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer's email
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="customerPassword"
              id="customerPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.customerPassword}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.customerPassword &&
              formik.touched.customerPassword && (
                <p className="text-red-600 text-left">
                  {formik.errors.customerPassword}
                </p>
              )}
            <label
              htmlFor="customerPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer's password
            </label>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Create a new customer
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
    </Modal>
  );
};

FormCreateCustomer.propTypes = {
  handleClickCLoseModal: PropTypes.func,
};

export default FormCreateCustomer;
