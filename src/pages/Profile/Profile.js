import React from 'react';
import testAvatar from '~/assets/image/background_iot_platform.JPG';

const Profile = () => {
  return (
    <div>
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="flex justify-between">
            <span className="text-xl font-semibold block">Duc</span>
            <a
              href="/"
              className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
            >
              Save
            </a>
          </div>

          <div className="text-gray-600 text-center">Administration</div>
          <div className="w-full p-8 flex justify-center">
            <label htmlFor="avatar_user" className="cursor-pointer">
              <img
                className="p-1 w-28 h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={testAvatar}
                alt="Bordered avatar"
              />
            </label>
            <input type="file" id="avatar_user" hidden></input>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label
                htmlFor="firstName"
                className="font-semibold text-gray-700 block pb-1 text-left"
              >
                First Name
              </label>
              <div className="flex">
                <input
                  id="firstName"
                  name="firstName"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="Lê Việt"
                />
              </div>
            </div>
            <div className="pb-6">
              <label
                htmlFor="lastName"
                className="font-semibold text-gray-700 block pb-1 text-left"
              >
                Last Name
              </label>
              <div className="flex">
                <input
                  id="lastName"
                  name="lastName"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="Đức"
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1 text-left"
              >
                Email
              </label>
              <input
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
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
