import React from 'react';

const Pagination = () => {
  return (
    <div>
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href="/"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  "
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="/"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-blue-700"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="/"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
          >
            2
          </a>
        </li>
        <li>
          <a
            href="/"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
