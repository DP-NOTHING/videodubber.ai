import React from 'react';

export default function Ft_Counter({data}) {

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {data.title}
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            {data.text}
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                  {data.counter[0].title}
              </dt>

              <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">
                 {data.counter[0].count}
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                  {data.counter[1].title}
              </dt>

              <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">{data.counter[1].count}</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                  {data.counter[2].title}
              </dt>

              <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">{data.counter[2].count}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}