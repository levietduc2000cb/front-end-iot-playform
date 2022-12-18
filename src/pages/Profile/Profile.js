import React from 'react';

import testAvatar from '~/assets/image/background_iot_platform.JPG';
import Img from '~/components/UI/Img';

const Profile = () => {
  return (
    <div>
      <div className="block border-b-2 md:flex">
        <div className="w-full bg-white p-4 shadow-md sm:p-6 md:w-2/5 lg:p-8">
          <div className="flex justify-between">
            <span className="block text-xl font-semibold">Duc</span>
            <a
              href="/"
              className="text-md -mt-2 rounded-full bg-gray-700 px-5 py-2 font-bold text-white hover:bg-gray-800"
            >
              Save
            </a>
          </div>

          <div className="text-center text-gray-600">Administration</div>
          <div className="flex w-full justify-center p-8">
            <label htmlFor="avatar_user" className="cursor-pointer">
              <div className="h-28 w-28 overflow-hidden rounded-full border border-gray-500 p-1">
                <Img linkImg={testAvatar}></Img>
              </div>
            </label>
            <input type="file" id="avatar_user" hidden></input>
          </div>
        </div>

        <div className="w-full bg-white p-8 shadow-md md:w-3/5 lg:ml-4">
          <div className="rounded  p-6 shadow">
            <div className="pb-6">
              <label
                htmlFor="firstName"
                className="block pb-1 text-left font-semibold text-gray-700"
              >
                First Name
              </label>
              <div className="flex">
                <input
                  id="firstName"
                  name="firstName"
                  className="border-1  w-full rounded-r px-4 py-2"
                  type="text"
                  defaultValue="Lê Việt"
                />
              </div>
            </div>
            <div className="pb-6">
              <label
                htmlFor="lastName"
                className="block pb-1 text-left font-semibold text-gray-700"
              >
                Last Name
              </label>
              <div className="flex">
                <input
                  id="lastName"
                  name="lastName"
                  className="border-1  w-full rounded-r px-4 py-2"
                  type="text"
                  defaultValue="Đức"
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="block pb-1 text-left font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                className="border-1  w-full rounded-r px-4 py-2"
                type="email"
                defaultValue="duc2000cb@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
