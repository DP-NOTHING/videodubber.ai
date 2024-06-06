import React from 'react';

export default function FlagMarquee({ flags, flagalts }) {
  
  return (
    <div className="relative flex overflow-x-hidden mx-4 mt-4 bg-gray-50 py-8">
      <div className="whitespace-nowrap animate-marquee">
        {Array.from({ length: 36 }, (_, i) => (
          <span key={i} className="mx-4 inline-flex h-5 w-10">
            <img 
              src={`https://flagcdn.com/h40/${flags[i]}.webp`} 
              alt={`National Flag of country ${flagalts[i]}`} 
              height="20" 
              width={["am","az","au","as","ba","bm","bn","bs","by","ca"].includes(flags[i]) ? "40" : "30"}
            />
          </span>
        ))}
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
    </div>
   
  );
}