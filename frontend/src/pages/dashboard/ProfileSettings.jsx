import React from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, CameraIcon } from '@heroicons/react/24/solid';

// Placeholder data - in a real app, this would come from the logged-in user's state
const userData = {
    name: 'Rohan Kumar',
    email: 'rohan.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'B-27/56, Durgakund, Varanasi, UP',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
};

const ProfileSettings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
        <form className="space-y-8 divide-y divide-gray-200">
          
          {/* Profile Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-500">Update your photo and personal details here.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <img className="h-24 w-24 rounded-full object-cover" src={userData.avatarUrl} alt="Profile" />
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center gap-2"
              >
                <CameraIcon className="h-5 w-5 text-gray-500"/>
                Change Photo
              </button>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="full-name" id="full-name" defaultValue={userData.name} className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"/>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="space-y-6 pt-8">
             <div>
              <h3 className="text-xl font-semibold leading-6 text-gray-900">Contact Information</h3>
              <p className="mt-1 text-sm text-gray-500">Manage your email, phone, and address.</p>
            </div>
             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input id="email" name="email" type="email" autoComplete="email" defaultValue={userData.email} className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"/>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="phone" id="phone" defaultValue={userData.phone} className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Full Address</label>
                 <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPinIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="address" id="address" defaultValue={userData.address} className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"/>
                </div>
              </div>
            </div>
          </div>
          
          {/* Save Button */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;