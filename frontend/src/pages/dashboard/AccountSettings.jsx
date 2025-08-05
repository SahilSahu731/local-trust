import React from 'react';
import { LockClosedIcon, BellIcon, TrashIcon } from '@heroicons/react/24/solid';

const AccountSettings = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>

      {/* Change Password Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
        <div className="flex items-start gap-x-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <LockClosedIcon className="h-7 w-7" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Change Password</h3>
            <p className="mt-1 text-sm text-gray-500">Update your password for enhanced security. Choose a strong, unique password.</p>
            <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-4">
              <div className="sm:col-span-3">
                <label htmlFor="current-password" cla ssName="block text-sm font-medium text-gray-700">Current Password</label>
                <input type="password" id="current-password" name="current-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="new-password" cla ssName="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" id="new-password" name="new-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-6 flex justify-end">
                <button type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Settings Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
         <div className="flex items-start gap-x-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <BellIcon className="h-7 w-7" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Notification Preferences</h3>
            <p className="mt-1 text-sm text-gray-500">Manage how you receive notifications from us.</p>
            <form className="mt-6 space-y-4">
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input id="email-notifications" name="email-notifications" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="email-notifications" className="font-medium text-gray-900">Email Notifications</label>
                        <p className="text-gray-500">Get emails about booking updates, promotions, and news.</p>
                    </div>
                </div>
                 <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input id="sms-notifications" name="sms-notifications" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="sms-notifications" className="font-medium text-gray-900">SMS Notifications</label>
                        <p className="text-gray-500">Get text messages for important booking reminders.</p>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>

      {/* Danger Zone - Delete Account */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
         <div className="flex items-start gap-x-5">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <TrashIcon className="h-7 w-7" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-red-900">Danger Zone</h3>
            <p className="mt-1 text-sm text-red-700">Deleting your account is a permanent action and cannot be undone. All your data, including booking history, will be removed.</p>
            <div className="mt-4">
              <button type="button" className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">Delete My Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;