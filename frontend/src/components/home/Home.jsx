import React from 'react';
import Cards from './Cards';

export default function Home() {
  return (
    <div className="flex flex-wrap mt-24">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <Cards />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <Cards />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <Cards />
      </div>
    </div>
  );
}
