import React from 'react';

import BackgroundTitle from '~/assets/image/background_title.jpg';
import FormLogIn from '~/components/FormLogIn';

const LogIn = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F0F3F4]">
      <div className="sm:max-w-md md:mt-0 xl:p-0 w-full rounded-lg bg-white shadow ">
        <div className="sm:p-8 md:space-y-6 space-y-4 p-6">
          <img
            src={BackgroundTitle}
            alt="background-title"
            className="mx-auto h-full max-h-[126px] w-full max-w-[126px] rounded-full border border-solid border-blue-600"
          />
          <h1 className="md:text-2xl text-center text-xl font-bold leading-tight tracking-tight text-gray-900">
            Login
          </h1>
          <FormLogIn />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
