"use client";
import React from "react";
import Link from "next/link";

const A2bExtraLinks = ({ langcodes, vord, alllinks ,data}) => {
  const vordCapitalized = vord.charAt(0).toUpperCase() + vord.slice(1);
  
  return (
    <div>
      <div className="px-8 mt-8">
        <h2 className="text-lg sm:text-2xl text-center text-indigo-800 mb-2 font-semibold">
          {data.heading1}
        </h2>
        {alllinks[0].map((i) => {
          if (
            i !== langcodes[1].toLowerCase() &&
            i !== langcodes[0].toLowerCase()
          ) {
            return (
              <p className="text-center text-base text-indigo-600 font-medium mb-2">
                <Link
                  href={`/translate-${langcodes[0].toLowerCase()}-${vord}-to-${i}/`}
                >
                  {data.linktext}
                  {i.charAt(0).toUpperCase() + i.slice(1)}
                </Link>
              </p>
            );
          }
        })}
        <div className="justify-center mx-auto mt-4 text-center">
          <button
            className="block mx-auto my-4 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
            onClick={() => (window.location = "/login")}
          >
            <Link href="/">
              {data.button1}
            </Link>
          </button>
        </div>
      </div>

      <div className="px-8 mt-8">
        <h2 className="text-lg sm:text-2xl text-center text-indigo-800 mb-2 font-semibold">
          {data.heading2}
        </h2>
        {alllinks[1].map((i) => {
          if (
            i !== langcodes[1].toLowerCase() &&
            i !== langcodes[0].toLowerCase()
          ) {
            return (
              <p className="text-center text-base text-indigo-600 font-medium mb-2">
                <Link
                  href={`/translate-${i}-${vord}-to-${langcodes[1].toLowerCase()}/`}
                >
                  Translate {i.charAt(0).toUpperCase() + i.slice(1)}{" "}
                  {data.linktext2} 
                </Link>
              </p>
            );
          }
        })}
        <div className="justify-center mx-auto mt-4 text-center">
          <button
            className="block mx-auto my-4 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
            onClick={() => (window.location = "/login")}
          >
            <Link href="/">
              {data.button2}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default A2bExtraLinks;
