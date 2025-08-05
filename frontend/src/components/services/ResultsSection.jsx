import React from 'react';
import { StarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

// This is placeholder data. In a real app, this would come from your state management/API.
const results = [
  // Let's reuse the provider data structure we defined for the homepage
  { name: 'Elena Garcia', service: 'Interior Designer', rating: 4.9, reviewCount: 84, imageUrl: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=1887&auto=format&fit=crop', profileUrl: '/provider/elena-garcia', description: 'Transforming spaces with creativity and precision. I bring your vision to life.' },
  { name: 'Mark Johnson', service: 'Master Plumber', rating: 4.8, reviewCount: 121, imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop', profileUrl: '/provider/mark-johnson', description: 'Fast, reliable, and affordable plumbing solutions for all your needs.' },
  { name: 'Aisha Khan', service: 'Pro House Cleaner', rating: 5.0, reviewCount: 97, imageUrl: 'https://images.unsplash.com/photo-1621609764095-b32635d7dd6d?q=80&w=2070&auto=format&fit=crop', profileUrl: '/provider/aisha-khan', description: 'Detailed and meticulous cleaning services that leave your home sparkling.' },
  { name: 'Raj Patel', service: 'Expert Electrician', rating: 4.7, reviewCount: 75, imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1887&auto=format&fit=crop', profileUrl: '/provider/raj-patel', description: 'Safe and certified electrical work for residential and commercial properties.' },
];

const ResultsSection = () => {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
        <h3 className="text-lg font-medium text-gray-800">
          Showing <span className="font-bold">1-4</span> of <span className="font-bold">28</span> results
        </h3>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <label htmlFor="sort" className="text-sm font-medium">Sort by:</label>
          <select id="sort" className="rounded-md border-gray-300 shadow-sm p-2 bg-gray-100 cursor-pointer focus:border-blue-500 focus:ring-blue-500">
            <option>Best Match</option>
            <option>Rating: High to Low</option>
            <option>Price: Low to High</option>
            <option>Most Reviews</option>
          </select>
        </div>
      </div>

      {/* Provider Cards Grid */}
      <div className="grid gap-6">
        {results.map((provider) => (
          <div key={provider.name} className="group flex flex-col sm:flex-row bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border">
            <div className="sm:w-1/3 h-56 sm:h-auto overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={provider.imageUrl} alt={provider.name} />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold text-gray-800">{provider.rating}</span>
                    <span className="text-sm text-gray-500">({provider.reviewCount})</span>
                  </div>
                </div>
                <p className="mt-1 text-base text-teal-600 font-semibold">{provider.service}</p>
                <p className="mt-4 text-sm text-gray-600 line-clamp-2">{provider.description}</p>
              </div>
              <div className="mt-6">
                <Link to={provider.profileUrl} className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-2.5 text-center font-medium text-white shadow-md transition hover:shadow-lg">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex-1 flex justify-between sm:hidden">
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</a>
          <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">28</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><ChevronLeftIcon className="h-5 w-5" /></a>
              <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
              <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
              <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">3</a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><ChevronRightIcon className="h-5 w-5" /></a>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ResultsSection;