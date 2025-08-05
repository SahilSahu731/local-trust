import React from 'react';
import { BriefcaseIcon, PlusIcon, PencilIcon, PauseCircleIcon } from '@heroicons/react/24/solid';

// Placeholder Data - In a real app, this would be fetched from your API for the logged-in provider
const existingServices = [
  {
    id: 1,
    name: 'Full Home Interior Design',
    category: 'Interior Design',
    price: '₹50,000+',
    status: 'Active',
    bookings: 12,
  },
  {
    id: 2,
    name: 'Single Room Makeover',
    category: 'Interior Design',
    price: '₹15,000',
    status: 'Active',
    bookings: 34,
  },
  {
    id: 3,
    name: 'Design Consultation (Virtual)',
    category: 'Consultation',
    price: '₹2,500',
    status: 'Paused',
    bookings: 5,
  },
];

const MyServices = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Services</h1>
          <p className="mt-1 text-gray-600">Manage, add, and edit the services you offer to customers.</p>
        </div>
        <button className="mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <PlusIcon className="h-5 w-5" />
          Add New Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {existingServices.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  service.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {service.status}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.category}</p>
              </div>
              <div className="flex-shrink-0 flex gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <PencilIcon className="h-5 w-5" />
                </button>
                 <button className="p-2 text-gray-400 hover:text-red-600">
                  <PauseCircleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-6 border-t pt-4 flex justify-between text-sm text-gray-600">
              <div className="font-semibold">
                Price: <span className="text-gray-900">{service.price}</span>
              </div>
              <div className="font-semibold">
                Total Bookings: <span className="text-gray-900">{service.bookings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;