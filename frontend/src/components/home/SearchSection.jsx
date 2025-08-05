import React from 'react';
import { SparklesIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { TagIcon } from '@heroicons/react/24/outline';

const popularTags = ['Plumber', 'Electrician', 'Painter', 'Home Cleaning', 'AC Repair'];

const SearchSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-16">
      {/* Background abstract shapes for decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
        <div className="h-48 w-48 rounded-full bg-gradient-to-br from-teal-100 to-blue-200 opacity-50 blur-2xl"></div>
      </div>
       <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-blue-100 to-teal-200 opacity-50 blur-2xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8">
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Find the Perfect Pro for Any Job</h2>
            <p className="mt-2 text-gray-600">Start your search below to get connected.</p>
          </div>

          {/* Main Search Input Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-gray-50 p-4 rounded-xl">
            
            {/* Service Search */}
            <div className="lg:col-span-5">
              <div className="relative border rounded-lg border-gray-200">
                <SparklesIcon className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-4 h-6 w-6 text-teal-500" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 text-lg border-transparent rounded-lg  focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="What service do you need?"
                />
              </div>
            </div>

            {/* Location */}
            <div className="lg:col-span-4">
               <div className="relative border rounded-lg border-gray-200">
                <MapPinIcon className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-4 h-6 w-6 text-blue-500" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 text-lg border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                  defaultValue="Delhi"
                />
              </div>
            </div>
            
            {/* Search Button */}
            <div className="lg:col-span-3">
              <button className="w-full h-full flex items-center cursor-pointer justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <TagIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Popular Searches:</span>
            {popularTags.map(tag => (
              <button key={tag} className="px-4 py-1.5 text-sm cursor-pointer font-medium bg-white text-gray-800 rounded-full border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;