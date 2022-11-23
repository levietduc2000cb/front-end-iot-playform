import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Modal from '~/components/Modal';

const FormCreateDashBoard = ({ handleClickCLoseModal }) => {
  // const optionDasboarDisplay = [
  //   {
  //     name: 'Select an dashboard to display',
  //     value: '',
  //   },
  //   { name: 'Table', value: 'Table' },
  //   { name: 'Card', value: 'Card' },
  //   { name: 'Doughnut Chart', value: 'DoughnutChart' },
  //   { name: 'Line Chart', value: 'LineChart' },
  //   { name: 'Pie Chart', value: 'PieChart' },
  //   { name: 'Vertical BarChart', value: 'VerticalBarChart' },
  // ];

  const formik = useFormik({
    initialValues: {
      dashboardName: '',
      dashboardDes: '',
      dashboarDisplay: '',
      dashboardDevice: '',
    },
    validationSchema: Yup.object({
      dashboardName: Yup.string().required("You must fill dashboard's name"),
      dashboardDes: Yup.string().required(
        "You must fill dashboard's description",
      ),
      dashboarDisplay: Yup.string().required(
        "You must select dashboard's display",
      ),
      dashboardDevice: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log({ values });
      //Đây là xử lý tạo dashboard
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
          <div className="pl-6">Add new device</div>
          <div className="pr-6 cursor-pointer" onClick={clickCloseModal}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="px-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="dashboardName"
              id="dashboardName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.dashboardName}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.dashboardName && formik.touched.dashboardName && (
              <p className="text-red-600 text-left">
                {formik.errors.dashboardName}
              </p>
            )}
            <label
              htmlFor="dashboardName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Device's name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="dashboardDes"
              id="dashboardDes"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.dashboardDes}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.dashboardDes && formik.touched.dashboardDes && (
              <p className="text-red-600 text-left">
                {formik.errors.dashboardDes}
              </p>
            )}
            <label
              htmlFor="dashboardDes"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Device's description
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="dashboarDisplay"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="dashboarDisplay"
              name="dashboarDisplay"
              value={formik.values.dashboarDisplay}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose a dashboard's display</option>
              <option value="Card">Card</option>
              <option value="Table">Table</option>
              <option value="DoughnutChart">Doughnut Chart</option>
              <option value="LineChart">Line Chart</option>
              <option value="PieChart">Pie Chart</option>
              <option value="VerticalBarChart">Vertical BarChart</option>
            </select>
            {formik.errors.dashboarDisplay &&
              formik.touched.dashboarDisplay && (
                <p className="text-red-600 text-left">
                  {formik.errors.dashboarDisplay}
                </p>
              )}
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="dashboardDevice"
              id="dashboardDevice"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formik.values.dashboardDevice}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            {formik.errors.dashboardDevice &&
              formik.touched.dashboardDevice && (
                <p className="text-red-600 text-left">
                  {formik.errors.dashboardDevice}
                </p>
              )}
            <label
              htmlFor="dashboardDevice"
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
              Create a new dashboard
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
FormCreateDashBoard.propTypes = {
  handleClickCLoseModal: PropTypes.func,
};
export default FormCreateDashBoard;
