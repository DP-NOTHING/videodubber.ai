import React from 'react';

const Testimonials = ({data}) => {
  
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {data.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt={data.testimonials[0].name}
                src={data.testimonials[0].image}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />

              <div>
                <div className="flex justify-left gap-0.5 text-green-500">
                {Array.from({ length: data.testimonials[0].rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="https://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-lg font-medium text-gray-900">{data.testimonials[0].name} <span className="mx-4 inline-flex">
                  <img src={data.testimonials[0].countyimage} alt={data.testimonials[0].country} className="" loading="lazy"></img></span></p>
                <p className="mt-1 text-xs font-medium text-gray-700">{data.testimonials[0].designation}</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-700">
              {data.testimonials[0].review}
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt={data.testimonials[1].name}
                src={data.testimonials[1].image}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />

              <div>
                <div className="flex justify-left gap-0.5 text-green-500">
                {Array.from({ length: data.testimonials[1].rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="https://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-900">{data.testimonials[1].name }<span className="mx-4 inline-flex"><img src="https://flagcdn.com/h20/gb.png" alt="National Flag of Great Britain" className="" loading="lazy"></img></span></p>
                <p className="mt-1 text-xs font-medium text-gray-700">{data.testimonials[1].designation}</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-700">
              {data.testimonials[1].review}
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt={data.testimonials[2].name}
                src={data.testimonials[2].image}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />

              <div>
                <div className="flex justify-left gap-0.5 text-green-500">
                {Array.from({ length: data.testimonials[2].rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="https://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}

                </div>

                <p className="mt-1 text-lg font-medium text-gray-900">{data.testimonials[2].name} <span className="mx-4 inline-flex"><img src="https://flagcdn.com/h20/in.png" alt="National Flag of India" className="" loading="lazy"></img></span></p>
                <p className="mt-1 text-xs font-medium text-gray-700">{data.testimonials[2].designation}</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-700">
              {data.testimonials[2].review}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
