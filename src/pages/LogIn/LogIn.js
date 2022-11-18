import React from 'react';

import FormLogIn from '~/components/FormLogIn';

const LogIn = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F0F3F4]">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <FormLogIn />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
