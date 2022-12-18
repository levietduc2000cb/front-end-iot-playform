import React from 'react';

import BackgroundTitle from '~/assets/image/background_title.jpg';
import FormRegister from '~/components/FormRegister';

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F0F3F4]">
      <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <img
            src={BackgroundTitle}
            alt="background-title"
            className="mx-auto h-full max-h-[126px] w-full max-w-[126px] rounded-full border border-solid border-blue-600"
          />
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Register
          </h1>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
