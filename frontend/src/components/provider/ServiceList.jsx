import React from 'react';

const services = [
  { name: 'Full Home Interior Design', price: '₹50,000+', duration: 'Project-based' },
  { name: 'Single Room Makeover', price: '₹15,000', duration: '3-5 days' },
  { name: 'Design Consultation (Virtual)', price: '₹2,500', duration: '1 hour' },
  { name: 'Furniture Selection & Sourcing', price: '₹8,000', duration: 'Per room' },
];

const ServiceList = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
      <div className="divide-y divide-gray-200">
        {services.map((service) => (
          <div key={service.name} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
              <p className="text-sm text-gray-500">{service.duration}</p>
            </div>
            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <p className="text-lg font-bold text-gray-900">{service.price}</p>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;