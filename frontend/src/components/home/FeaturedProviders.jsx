import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

// In a real application, you would fetch this data from your API
const providers = [
  {
    name: 'Elena Garcia',
    service: 'Interior Designer',
    rating: 4.9,
    reviewCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=1887&auto=format&fit=crop',
    profileUrl: '/provider/elena-garcia'
  },
  {
    name: 'Mark Johnson',
    service: 'Master Plumber',
    rating: 4.8,
    reviewCount: 121,
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    profileUrl: '/provider/mark-johnson'
  },
  {
    name: 'Aisha Khan',
    service: 'Pro House Cleaner',
    rating: 5.0,
    reviewCount: 97,
    imageUrl: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    profileUrl: '/provider/aisha-khan'
  },
];

const FeaturedProviders = () => {
  return (
    <section className="w-full bg-slate-200 shadow-xl rounded-xl py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600 tracking-wider">Meet The Experts</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Highest-Rated Professionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Handpicked professionals who consistently deliver exceptional quality work.
          </p>
        </div>

        <div className="mt-16 grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <div key={provider.name} className="group flex flex-col bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                <div className="w-full h-72 overflow-hidden rounded-t-xl">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={provider.imageUrl} alt={provider.name} />
                </div>
                 <Link to={provider.profileUrl} className="absolute inset-0" aria-label={`View profile of ${provider.name}`}></Link>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                    <p className="mt-1 text-base text-teal-600 font-medium">{provider.service}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold text-gray-800">{provider.rating}</span>
                    <span className="text-sm text-gray-500">({provider.reviewCount} reviews)</span>
                  </div>
                  <Link 
                    to={provider.profileUrl} 
                    className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                  >
                    View Profile &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Link 
                to="/services"
                className="inline-block rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-3 text-center font-medium text-white shadow-md transition hover:shadow-lg"
            >
                View All Professionals
            </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProviders;