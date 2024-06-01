import React from 'react';
import NewShowcase from './NewShowcase';

export default function VideoSection() {
  const data={
    title: "Reach a Billion Viewers!",
    subtitle: "Translate Your Video with AI!",
    description: "Mandarin, Spanish, Hindi viewers make 5 Billion viewers of Internet alone!",
    button1:{
      text : "Get Started Free",
      url : "/login"
    },
    button2:{
      text : "Learn How",
      url : "/login"
    }
  }
  return (
    <div className="mx-auto justify-between max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 grid lg:grid-cols-5">
      <div className="text-center lg:text-left lg:mt-12 col-span-3">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          {data.title}
          <span className="block font-extrabold text-indigo-700">
            {data.subtitle}
          </span>
        </h1>

        <p className="mt-4 lg:text-xl/relaxed">
          {data.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center justify-center lg:justify-start">
          <button onClick={() => window.location =data.button1.url}
            className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          >
            {data.button1.text}
          </button>

          <button onClick={() => window.location =data.button2.url}
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
          >
            {data.button2.text}
          </button>
        </div>
      </div>

      <div className="hidden rounded-lg mt-10 sm:mt-14 md:mt-8 lg:mt-0 aspect-video lg:inline-flex text-right lg:mr-12 lg:ml-4 col-span-2" style={{margin:0}}>
        <NewShowcase />
      </div>
    </div>
  );
}