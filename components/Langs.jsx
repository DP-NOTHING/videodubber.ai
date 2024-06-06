import React from 'react';

export default function Langs({ langs }) {
  
  return (
    <>
      <h2 className="text-xl font-medium sm:text-2xl text-center px-4 sm:px-6 lg:px-8 py-4">
        Make your video speak <span className="text-blue-900"><em>language of your customer's choice</em></span> with Generative AI
      </h2>
      <div className="relative flex overflow-x-hidden mx-4 bg-gray-50 py-8">
        <div className="animate-marquee whitespace-nowrap">
          {langs.map((lang, i) => (
            <span key={i} className="mx-4 inline-flex h-5">{lang}</span>
          ))}
        </div>
      </div>
      <style jsx>{` 
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
  
          100% {
            transform: translateX(-100%);
          }
        }
  
        .animate-marquee {
          animation: marquee 15s linear infinite;
          width:100%
        }  
  
        `}</style>
      
    </>
  );
}