import React from 'react';

const FormRegister = () => {
  return (
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        ></input>
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>
      <div>
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Confirm password
        </label>
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
          ></input>
        </div>
        <div class="ml-3 text-sm">
          <label
            for="terms"
            class="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{' '}
            <a
              class="font-medium text-blue-700 hover:underline dark:text-primary-500"
              href="/"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <a
          href="/"
          class="font-medium text-primary-600 hover:underline text-blue-700"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

export default FormRegister;
