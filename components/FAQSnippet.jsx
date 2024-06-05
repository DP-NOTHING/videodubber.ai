import React from 'react';

function FAQSnippet({ faqlist2, faqlist }) {


  faqlist2 = [
    {
      q: " What are VideoDubber Credits?",
      a: "To access the platform's services, we apply credit charges: 4 credits for one minute of voice over in video, 1 credit for one minute of translation, 1 credit for one minute of text-to-speech, and 1 credit for one minute of subtitling. In the subscription page, you are said that you will get x minutes of dubbing which actually translates to x*(4+1+1)=6x credits since one minute of dubbing means one minute of subtitling+one minute of translation+one minute of voicing over."
    },
    {
      q: "What happens once my trial gets over?",
      a: "You have the choice to access our product for free through our freemium plan, which comes with limitations on certain features and speakers. Alternatively, you can opt for a pro subscription to unlock and continue enjoying the full range of pro features."
    },
  ];
  faqlist = [
    {
      q: "Is Google Translate 100% right?",
      a: "Google Translate is fast but not always 100% accurate. For precise translations, platforms like Videodubber.ai offer more reliable results."
    },
    {
      q: "Can I translate live audio?",
      a: "Live audio translation is possible with certain tools like Videodubber.ai's live translation feature, providing real-time audio translations.",
    }
  ];

  return (
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
  );
}

export default FAQSnippet;