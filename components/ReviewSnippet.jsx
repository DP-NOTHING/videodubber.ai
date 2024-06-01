import React from 'react';

function ReviewsSnippet({ reviews }) {
  return (
    <div className="mt-10 font-monospace px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">Customer Reviews</h2>
      <p className="text-center mt-2 text-sm sm:text-base">Rated <b>Excellent 4.98/5</b> on <a href="https://theresanaiforthat.com/ai/videodubber/#rw">There's An AI For That (TAAFT) - The #1 AI Aggregator</a></p>
      <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto justify-center" style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-full">
            <div className="flex justify-between">
              <h3 className="mt-0.5 text-base sm:text-xl font-medium text-gray-900">
                {reviews[i * 4]}
              </h3>
              <div className="flex items-center">
                {/* SVGs here */}
              </div>
            </div>
            <p className="mt-2 line-clamp-3 text-sm sm:text-base text-gray-500">
              {reviews[i * 4 + 1]}
            </p>
            <p className="group mt-4 inline-flex items-center gap-1 text-sm sm:text-base font-medium text-gray-600">
              {reviews[i * 4 + 2]}
            </p>
          </li>
        ))}
      </ul>
      <div className="justify-center mx-auto mt-4 text-center">
        <a className="text-gray-500 text-xl" href="https://theresanaiforthat.com/ai/videodubber/">See all reviews <span className="text-gray-800">▸</span></a>
        <button className="block mx-auto my-4 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button" onClick={() => window.location = '/login'}>
          Get Started free
        </button>
      </div>
    </div>
  );
}

export default ReviewsSnippet;