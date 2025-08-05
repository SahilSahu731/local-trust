import React from 'react';
import { FunnelIcon, StarIcon } from '@heroicons/react/24/solid';

const categories = ['Home Repairs', 'Painting', 'Cleaning', 'Movers', 'IT Support', 'Wellness'];
const ratings = [5, 4, 3];

const FilterSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-8">
      
      {/* Filters Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={`category-${category}`}
                name="category[]"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
        <div className="flex items-center space-x-2">
            <input type="number" placeholder="Min" className="w-full p-2 border rounded-md" />
            <span className="text-gray-500">-</span>
            <input type="number" placeholder="Max" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating</h3>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center">
              <input
                id={`rating-${rating}`}
                name="rating[]"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor={`rating-${rating}`} className="ml-3 flex items-center text-sm text-gray-600">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2">& Up</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full flex items-center cursor-pointer hover:scale-105 justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
        <FunnelIcon className="h-5 w-5" />
        Apply Filters
      </button>

    </div>
  );
};

export default FilterSidebar;