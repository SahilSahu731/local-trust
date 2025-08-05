import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const BookingWidget = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <h3 className="text-xl font-bold text-gray-900 text-center">Book This Professional</h3>
      
      <div className="mt-6">
        <label htmlFor="service-select" className="block text-sm font-medium text-gray-700">Choose a service</label>
        <select id="service-select" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
          <option>Full Home Interior Design</option>
          <option>Single Room Makeover</option>
          <option>Design Consultation (Virtual)</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select a date</label>
        <div className="relative mt-1">
          <input type="text" id="date" placeholder="Choose a date" className="w-full pl-3 pr-10 py-2 border-gray-300 rounded-md" />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/checkout">    
        <button className="w-full flex items-center cursor-pointer justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          Request to Book
        </button>
        </Link>
      </div>
      
      <p className="mt-4 text-xs text-center text-gray-500">You won't be charged until you confirm.</p>
    </div>
  );
};

export default BookingWidget;