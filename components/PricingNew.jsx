import React from 'react';
import 'tailwindcss/tailwind.css';

const plans = [
  {
    name: "Free Plan",
    price: "0$",
    period: "/month",
    features: [
      { feature: "Video Translation", value: "5 Mins/mo" },
      { feature: "Premium Voice", value: "0 Mins/mo" },
      { feature: "Subtitles", value: "Unlimited" },
      { feature: "Export", value: false },
      { feature: "Storage", value: "100 MB" },
      { feature: "Max File Upload Length", value: "5 Mins" },
      { feature: "Max File Upload Size", value: "100 MB" },
      { feature: "Users", value: "Unlimited" },
      { feature: "Export Quality", value: false },
      { feature: "Download Subtitles", value: "SRT, VTT" },
      { feature: "No Watermark", value: false },
      { feature: "No. of Folders", value: "1" }
    ]
  },
  // Add more plan objects if needed
];

const PricingNew = () => {
  return (
    <div className="max-w-screen-xl px-2 py-8 sm:px-6 sm:py-12 lg:py-16 m-auto flex grid grid-cols-3 gap-4">
      {plans.map((plan, index) => (
        <div key={index} className="sm:items-stretch">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{plan.price}</strong>
                <span className="text-sm font-medium text-gray-700">{plan.period}</span>
              </p>
              <div className="flex h-[3rem] w-[95%] items-center md:h-[4rem] md:w-full">
                <div className="rc-slider mb-[3.5rem] flex items-center rc-slider-horizontal rc-slider-with-marks">
                  <div className="rc-slider-rail" style={{ height: '8px', background: '#e4e4e7' }}></div>
                  <div className="rc-slider-track" style={{ left: '0%', width: '0%', height: '8px', background: 'linear-gradient(70deg, rgba(67, 169, 253, 1) 0%, rgba(95, 67, 253, 1) 41.12%, rgba(129, 67, 253, 1) 92.66%)' }}></div>
                  <div className="rc-slider-step">
                    <span className="rc-slider-dot rc-slider-dot-active" style={{ left: '0%', transform: 'translateX(-50%)', height: '10px', width: '10px', border: '1px solid rgba(67, 169, 253, 1)', background: 'linear-gradient(70deg, rgba(67, 169, 253, 1) 0%, rgba(95, 67, 253, 1) 41.12%, rgba(129, 67, 253, 1) 92.66%)' }}></span>
                    <span className="rc-slider-dot" style={{ left: '50%', transform: 'translateX(-50%)', height: '10px', width: '10px', border: '0.5px solid #000000', background: '#000000' }}></span>
                    <span className="rc-slider-dot" style={{ left: '100%', transform: 'translateX(-50%)', height: '10px', width: '10px', border: '0.5px solid #000000', background: '#000000' }}></span>
                  </div>
                  <div className="rc-slider-handle" style={{ left: '0%', transform: 'translateX(-50%)', border: '1px solid rgba(95, 67, 253, 1)', height: '18px', width: '18px', marginTop: '0', background: 'linear-gradient(70deg, rgba(67, 169, 253, 1) 0%, rgba(95, 67, 253, 1) 41.12%, rgba(129, 67, 253, 1) 92.66%)', boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)' }} tabIndex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-disabled="false" aria-orientation="horizontal"></div>
                  <div className="rc-slider-mark">
                    <span className="rc-slider-mark-text rc-slider-mark-text-active" style={{ left: '0%', transform: 'translateX(-50%)' }}><p className="text-[0.775rem] font-normal leading-6 text-[#848484] md:text-[0.875rem]">29</p></span>
                    <span className="rc-slider-mark-text" style={{ left: '50%', transform: 'translateX(-50%)' }}><p className="text-[0.775rem] font-normal leading-6 text-[#848484] md:text-[0.875rem]">49</p></span>
                    <span className="rc-slider-mark-text" style={{ left: '100%', transform: 'translateX(-50%)' }}><p className="text-[0.775rem] font-normal leading-6 text-[#848484] md:text-[0.875rem]">99</p></span>
                  </div>
                </div>
              </div>
              <a className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6" href="#">
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg text-gray-900 font-bold sm:text-xl">Features:</p>

              <ul className="mt-2 space-y-2 sm:mt-4 text-[15px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="text-gray-700">{feature.feature}</span>
                    {typeof feature.value === 'boolean' ? (
                      feature.value ? (
                        <span className="text-gray-700">Yes</span>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-red-700">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingNew;
