"use client"
import React, { useEffect } from 'react';

const PricingTable = () => {
  const data={
    heading : "yearly billing (save up to 17%)",
    plans :[
      {
        name:"Starter",
        price:"0$",
        features:[
          "5 video minutes",
          "Subtitles Modification",
          "Youtube URL support",
          "Free Subtitles download"
        ],
        label:"Get Started"
      },
      {
        name:"Pro",
        price:"19 $",
        features:[
          "75 video minutes",
          "Everything in Free",
          "High quality Videos",
          "MP4 Downloads",
          "No watermark"
        ],
        label:"Purchase"
      },
      {
        name:"Enterprise",
        price:"23,999 ₹",
        features:[
          "Unlimited video minutes",
          "Subtitles Modification",
          "Youtube URL support",
          "Free Subtitles download"
        ],
        label:"Get Started"
      }
    ]
  }
  useEffect(() => {
    const tzone = (() => {
      try {
        return String(Intl.DateTimeFormat().resolvedOptions().timeZone);
      } catch (err) {
        return "none";
      }
    })();

    const updatePrices = () => {
      const isChecked = document.getElementById("checkbox1").checked;
      const priceElement = document.getElementById("price2");
      const billText = document.getElementById("billtext");

      if (isChecked) {
        priceElement.innerHTML = "16 $";
        billText.innerHTML = "(Billed Annually)";
        if (tzone === 'Asia/Calcutta' || tzone === 'Asia/Kolkata') {
          priceElement.innerHTML = "1,250 ₹ ";
        }
      } else {
        priceElement.innerHTML = "19 $";
        billText.innerHTML = "(Billed Monthly)";
        if (tzone === 'Asia/Calcutta' || tzone === 'Asia/Kolkata') {
          priceElement.innerHTML = "1,499 ₹ ";
        }
      }
    };

    const redirectToPurchase = () => {
      const billfreq = document.getElementById("checkbox1").checked ? "y" : "m";
      window.location.href = `https://videodubber.ai/buypro?billfreq=${billfreq}&tzone=${tzone}`;
    };

    document.getElementById("checkbox1").addEventListener("change", updatePrices);
    document.getElementById("myBtn").addEventListener("click", redirectToPurchase);

    if (tzone === 'Asia/Calcutta' || tzone === 'Asia/Kolkata') {
      document.getElementById("price1").innerHTML = "0 ₹ ";
      document.getElementById("price2").innerHTML = "1,499 ₹ ";
      document.getElementById("price3").innerHTML = "23,999 ₹ ";
      document.getElementById("price4").innerHTML = "7,999 ₹ ";
    }
  }, []);

  const handleLoginRedirect = () => {
    window.location = '/login';
  };

  return (
    <div>
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: #2196F3;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>

      <div className="text-center mb-4">
        <label htmlFor="checkbox1">
          {data.heading}
          <div className="switch p-1">
            <input id="checkbox1" type="checkbox" aria-label="Yearly Billing" />
            <span className="slider round" role="checkbox" aria-checked="false" aria-label="Yearly Billing Toggler"></span>
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
             {data.plans[0].name}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-xl font-bold text-gray-500 sm:text-4xl">
                <span id="price1">{data.plans[0].price}</span>
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700">{data.plans[0].features[0]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[0].features[1]}</span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[0].features[2]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[0].features[3]} </span>
            </li>
          </ul>

          <div
            onClick={handleLoginRedirect}
            className="mt-8 block rounded-full border border-indigo-600 bg-white px-0 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
          >
            {data.plans[0].label}
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:px-8 lg:p-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              {data.plans[1].name} <span
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700"
            >
              Limited time offer
            </span>
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-2xl font-bold text-gray-700">
                <span style={{ textDecoration: 'line-through' }}><span id="price4">100$</span></span>
              </strong><span id="offtext" className="text-sm font-medium text-green-700"> - 80%</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-xl font-bold text-gray-700 sm:text-2xl">
                <span id="price2">{data.plans[1].price}</span>
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <p id="billtext" className="text-sm font-medium text-gray-700">(Billed Monthly)</p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[1].features[0]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[1].features[1]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[1].features[2]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[1].features[3]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[1].features[4]} </span>
            </li>
          </ul>

          <div
            id="myBtn"
            className="mt-8 block w-full rounded-full bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:bg-indigo-400 cursor-pointer"
          >
            {data.plans[1].label}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              {data.plans[2].name}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-xl font-bold text-gray-500 sm:text-4xl">
                <span id="price3">{data.plans[2].price} </span>
              </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[2].features[0]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[2].features[1]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[2].features[2]} </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span className="text-gray-700"> {data.plans[2].features[3]} </span>
            </li>
          </ul>

          <div
            onClick={handleLoginRedirect}
            className="mt-8 block rounded-full border border-indigo-600 bg-white px-0 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
          >
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
