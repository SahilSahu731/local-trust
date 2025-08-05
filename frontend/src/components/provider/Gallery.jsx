import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

// In a real app, these image URLs would come from the provider's profile data
const images = [
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2727&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163024-58ea4f79f796?q=80&w=2670&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border">
      <div className="flex items-center gap-3 mb-6">
        <PhotoIcon className="h-7 w-7 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">Portfolio & Gallery</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Portfolio image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
            {/* In a real app, clicking this would open a full-screen lightbox */}
            <a href={src} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
              <span className="sr-only">View image</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;