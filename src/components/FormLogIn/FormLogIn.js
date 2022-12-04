import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormLogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('You must fill your email'),
      password: Yup.string().required('You must fill your password'),
    }),
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@gmail.com"
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
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete="off"
        ></input>
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-600 text-left">{formik.errors.password}</p>
        )}
      </div>
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
            ></input>
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <a
          href="/lost-password"
          className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{' '}
        <Link
          to={'/register'}
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </Link>
      </div>
    </form>
  );
};

export default FormLogIn;
