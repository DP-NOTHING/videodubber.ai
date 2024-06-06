import React from 'react'

export const TitleText = ({langcodes,vord,data}) => {
    const vordCapitalized = vord.charAt(0).toUpperCase() + vord.slice(1);
  
  return (
    <div>
    <h1 className="text-2xl sm:text-4xl font-extrabold mx-6 text-center mb-2">
        {data.heading}
      </h1>
      <p className="mx-6 text-center mb-4 text-sm sm:text-base">
        {data.subheading}
      </p>
      <button
        className="block mx-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
        type="button"
        onClick={() => (window.location = "/login")}
      >
        {data.button}
      </button>
      </div>
  )
}
