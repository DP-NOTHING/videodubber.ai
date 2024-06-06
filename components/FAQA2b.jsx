import React from "react";

const FAQA2b = ({ faqlist ,data}) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
        <h2 className="text-lg sm:text-2xl text-center bg-gradient-to-r from-pink-800 via-indigo-500 to-red-600 bg-clip-text font-extrabold text-transparent mb-8">
          {data.heading}
        </h2>
    <div className="space-y-4">
      {faqlist.map((i) => (
        <details className="group border-s-4 border-indigo-500 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h3 className="text-base sm:text-xl font-medium text-gray-900">
              {i["q"]}
            </h3>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </summary>
          <p className="text-sm sm:text-base mt-4 leading-relaxed text-gray-700">
            {i["a"]}
          </p>
        </details>
      ))}
    </div>
    </div>
  );
};

export default FAQA2b;
