import React from 'react';

function ReviewsSnippet({ reviews }) {

//   Better than Elevenlabs..
// The best VideoDubbing app, much better than elevenlabs or any other alternative!
// Jessica Turner

// Commendable Customer Service!
// Very nice product and superb customer service. 24K
// Steve, CEO@24K

// Too Perfect!
// Videodubber.ai makes video dubbing sound so real – can't even tell it's done by a machine.
// KRAB OFFICIAL

// Easy to Use and Light on Pocket!
// I've used many other video dubber but this one is very easy to use and light on pocket. Using it for a week, results are promising.
// Pranay Goswami

// Must have for content creators!!
// VideoDubber is a game-changer for content creators, effortlessly translating and dubbing videos to reach a global audience, making it a must-have tool for anyone looking to expand their reach.
// Nischay Parekh

// Smooth Localization..
// Works like a charm. Now I am able to post the same content on YouTube but localised into different languages.
// Bishakh Ghosh

reviews = [ "Better than Elevenlabs..", "The best VideoDubbing app, much better than elevenlabs or any other alternative!", "Jessica Turner","", "Commendable Customer Service!", "Very nice product and superb customer service. 24K", "Steve, CEO@24K","", "Too Perfect!", "Videodubber.ai makes video dubbing sound so real – can't even tell it's done by a machine.", "KRAB OFFICIAL","", "Easy to Use and Light on Pocket!", "I've used many other video dubber but this one is very easy to use and light on pocket. Using it for a week, results are promising.", "Pranay Goswami", "Must have for content creators!!", "VideoDubber is a game-changer for content creators, effortlessly translating and dubbing videos to reach a global audience, making it a must-have tool for anyone looking to expand their reach.", "Nischay Parekh", "Smooth Localization..", "Works like a charm. Now I am able to post the same content on YouTube but localised into different languages.", "Bishakh Ghosh"
];

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
                {Array.from({ length: 5 }, (_, i) => (
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
                ))}

                    
              
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