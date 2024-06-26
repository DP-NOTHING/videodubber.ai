import React from 'react';

function FAQSnippet({ faqlist2, faqlist }) {


  

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
          <h2 className="text-center bg-gradient-to-r from-pink-800 via-indigo-500 to-red-600 bg-clip-text text-3xl sm:text-4xl font-extrabold text-transparent mb-8">
            Frequently Asked Questions
          </h2>
    <div className="space-y-4">
      {faqlist2.map((faq, index) => (
        <details key={index} className="group border-s-4 border-indigo-500 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {faq.q}
            </h2>
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
          <div dangerouslySetInnerHTML={{ __html: faq.a }} />
        </details>
      ))}
      {faqlist.map((faq, index) => (
        <details key={index} className="group border-s-4 border-indigo-500 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {faq.q}
            </h2>
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
          <p className="mt-4 leading-relaxed text-gray-700">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
    </div>
  );
}

export default FAQSnippet;