import React from 'react';

import BackgroundTitle from '~/assets/image/background_title.jpg';
import FormRegister from '~/components/FormRegister';

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F0F3F4]">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <img
            src={BackgroundTitle}
            alt="background-title"
            className="max-w-[126px] w-full max-h-[126px] h-full mx-auto border border-solid border-blue-600 rounded-full"
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
            Register
          </h1>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
