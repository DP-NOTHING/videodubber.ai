import React from 'react';
import PricingTable from './PricingTable';

export default function PricingSection() {
  const data={
    heading:"3x Cheaper for quick-testing new tech!",
    subHeading:"Get the VideoDubber Advantage before your competitors!",
  }
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center pb-4">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {data.heading}
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          {data.subHeading}
        </p>
      </div>

      <PricingTable />
    </div>
  );
}