import React from 'react';
import { UserCircleIcon, BuildingStorefrontIcon, PencilIcon, PhotoIcon, CameraIcon, TrashIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const providerData = {
    name: 'Elena Garcia',
    businessName: 'Elena Garcia Designs',
    bio: "With over a decade of experience in transforming spaces, I bring a blend of modern aesthetics and functional design to every project. My passion is creating beautiful, livable homes that reflect my clients' personalities.",
    avatarUrl: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=1887&auto=format&fit=crop',
    galleryImages: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2787&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2727&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540574163024-58ea4f79f796?q=80&w=2670&auto=format&fit=crop',
    ]
};

const ProviderProfile = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">My Public Profile</h1>
                <p className="mt-1 text-gray-600">This is the information customers will see on your profile page.</p>
            </div>

            {/* Profile Information Form */}
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
                <form className="space-y-8">
                    <div className="flex items-center gap-6">
                        <img className="h-24 w-24 rounded-full object-cover" src={providerData.avatarUrl} alt="Profile" />
                        <button type="button" className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center gap-2">
                            <CameraIcon className="h-5 w-5 text-gray-500"/> Change Profile Picture
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">Business Name</label>
                            <input type="text" id="business-name" defaultValue={providerData.businessName} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="full-name" defaultValue={providerData.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About / Bio</label>
                            <textarea id="bio" name="bio" rows={4} defaultValue={providerData.bio} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                            <p className="mt-2 text-xs text-gray-500">A brief description of your services and experience. This will be shown publicly.</p>
                        </div>
                    </div>
                     <div className="pt-6 flex justify-end">
                        <button type="submit" className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Save Profile</button>
                    </div>
                </form>
            </div>

            {/* Gallery Management Section */}
            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">My Portfolio Gallery</h3>
                        <p className="mt-1 text-sm text-gray-500">Showcase your best work. Add or remove photos from your gallery.</p>
                    </div>
                    <button className="mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-slate-800">
                        <PhotoIcon className="h-5 w-5"/> Upload Photos
                    </button>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {providerData.galleryImages.map((src, index) => (
                        <div key={index} className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                            <img src={src} alt={`Portfolio image ${index + 1}`} className="h-full w-full object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
                            <button className="absolute top-2 right-2 p-1.5 bg-white/50 rounded-full text-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-white">
                                <TrashIcon className="h-5 w-5"/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProviderProfile;