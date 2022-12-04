import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormRegister = () => {
  const [illegalForm, setIllegalForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('You must fill your email'),
      password: Yup.string()
        .min(10, 'Your password must be at least 10 characters')
        .required('You must fill your password'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Your confirm password does not match!')
        .required('You must fill your confirm password '),
    }),
    onSubmit: (values) => {
      let emailTail = values.email.split('@')[1];
      if (emailTail !== 'thanglong.edu.vn' && !illegalForm) {
        formik.errors.email = 'Email must be exam@thanglong.edu.vn';
        setIllegalForm(true);
        return;
      } else {
        console.log(`Tạo tai khoản thành công : ${values}`);
        setIllegalForm(false);
      }
    },
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="exam@thanglong.edu.vn"
          value={formik.values.email}
          onChange={formik.handleChange}
          autoComplete="off"
        ></input>
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-600 text-left">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete="off"
        ></input>
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-600 text-left">{formik.errors.password}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          autoComplete="off"
        ></input>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="text-red-600 text-left">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          to={'/log-in'}
          className="font-medium text-primary-600 hover:underline text-blue-700"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
