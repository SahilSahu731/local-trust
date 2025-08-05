import React from 'react';
import { StarIcon, CheckBadgeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ProviderHeader = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=1887&auto=format&fit=crop" 
            alt="Elena Garcia"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Elena Garcia</h1>
          <p className="mt-1 text-lg font-medium text-teal-600">Interior Designer & Home Stylist</p>
          
          <div className="mt-3 flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="font-bold text-gray-800">4.9</span>
              <span className="text-sm text-gray-500">(84 reviews)</span>
            </div>
            <span className="text-gray-300 hidden sm:block">|</span>
            <div className="flex items-center gap-1.5 text-blue-600">
              <CheckBadgeIcon className="h-5 w-5" />
              <span className="text-sm font-semibold">Verified Pro</span>
            </div>
            <span className="text-gray-300 hidden sm:block">|</span>
            <div className="flex items-center gap-1.5 text-gray-600">
              <MapPinIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Varanasi, UP</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-600">
            With over a decade of experience in transforming spaces, I bring a blend of modern aesthetics and functional design to every project. My passion is creating beautiful, livable homes that reflect my clients' personalities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderHeader;