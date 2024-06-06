import React from 'react';
import Link from 'next/link';

export default function Ft_section4({data}) {
  
  return (
    <section className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt={data.alt}
              src={data.image}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:py-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{data.title}</h2>
            <p className="mt-4 text-gray-600">{data.description}</p>
            <p className="mt-4 text-gray-800"><strong>{data.points_heading}</strong></p>

            <div className="mt-4 text-gray-600">
              <ul className="list-disc pl-5">
                {data.points.map((point, index) => ( 
                  <li key={index} className="mb-2">{point}</li>
                 ))}
              </ul> <strong>10x your audience</strong> with the power of AI<em>!</em>
            </div>

            <Link href={data.button.link} className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                {data.button.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}