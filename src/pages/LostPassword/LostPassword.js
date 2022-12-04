import React from 'react';

import BackgroundTitle from '~/assets/image/background_title.jpg';

const LostPassword = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F0F3F4]">
      <form className="max-w-md w-full bg-white py-10 px-6 rounded">
        <img
          src={BackgroundTitle}
          alt="background-title"
          className="max-w-[134px] w-full max-h-[134px] h-full mx-auto border border-solid border-blue-600 rounded-full"
        />
        <h2 className="text-center text-xl font-bold my-5">
          Lost your password?
        </h2>
        <p className="text-center text-base">
          It happens to the best of us! Enter your email address to recive
          instructions on how to reset your password
        </p>
        <div class="mb-6 mt-2">
          <label
            htmlFor="emailAddress"
            className="block mb-2 text-base font-bold text-gray-900 "
          >
            Email address
          </label>
          <input
            type="email"
            id="emailAddress"
            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            required
          />
        </div>
        <button className="w-full bg-[#126cf0] hover:bg-[#126bf0ec] text-white py-2 rounded-md">
          Send Email
        </button>
        <div className="text-center text-base mt-6">
          Need an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </div>
        <div className="text-center text-base mt-2">
          Suddenly remembered?{' '}
          <a href="/log-in" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default LostPassword;
