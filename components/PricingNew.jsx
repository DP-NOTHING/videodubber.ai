"use client";
import React, { useState } from "react";

const PricingNew = ({ plans }) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const handleSliderChange = (event) => {
    setSelectedPlanIndex(parseInt(event.target.value, 10));
  };
  const plan = plans[selectedPlanIndex];

  return (
    <div className="max-w-screen-xl px-2 py-2 sm:px-6 sm:py-6 m-auto">
      {/* Slider for selecting the plan */}

      {/* Plan details */}
      <div key={selectedPlanIndex} className="sm:items-stretch mt-8">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm w-full md:w-3/4 lg:w-1/2 mx-auto">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {plan.price}
              </strong>
              <span className="text-sm font-medium text-gray-700">
                {plan.period}
              </span>
            </p>

            <div className="relative">
              <input
                type="range"
                min="0"
                max={plans.length - 1}
                value={selectedPlanIndex}
                onChange={handleSliderChange}
                className="w-full h-2 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(90deg, #6875F5 0% ${
                    (selectedPlanIndex / (plans.length - 1)) * 100
                  }%, #D8D8D8 ${
                    (selectedPlanIndex / (plans.length - 1)) * 100
                  }%)`,
                }}
              />
            </div>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="/login"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg text-gray-900 font-bold sm:text-xl">
              Features:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4 text-[15px]">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex justify-between">
                  <span className="text-gray-700">{feature.feature}</span>
                  {typeof feature.value === "boolean" ? (
                    feature.value ? (
                      <span className="text-gray-700">Yes</span>
                    ) : (
                      // SVG icon for false boolean values
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
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
    </div>
  );
};

export default PricingNew;
