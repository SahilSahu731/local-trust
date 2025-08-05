import React from 'react';
import { BanknotesIcon, CalendarDaysIcon, StarIcon, ArrowUpIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const stats = [
  { name: 'Total Revenue', stat: '₹4,05,897', icon: BanknotesIcon, change: '12.2%', changeType: 'increase' },
  { name: 'Total Bookings', stat: '256', icon: CalendarDaysIcon, change: '5.4%', changeType: 'increase' },
  { name: 'Average Rating', stat: '4.89', icon: StarIcon, change: '0.1', changeType: 'increase' },
];

const upcomingJobs = [
    { id: 1, customer: 'Rohan Kumar', service: 'Interior Design Consultation', time: 'Today at 11:00 AM' },
    { id: 2, customer: 'Anjali Verma', service: 'Single Room Makeover', time: 'Tomorrow at 02:00 PM' },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Elena!</h1>
        <p className="mt-1 text-gray-600">Here's a snapshot of your business today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="relative overflow-hidden rounded-xl bg-white p-5 shadow-lg">
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p className={`ml-2 flex items-baseline text-sm font-semibold text-green-600`}>
                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" />
                <span>{item.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Main Grid: Chart and Upcoming Jobs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Earnings Overview</h3>
            {/* Placeholder for a chart library like Chart.js or Recharts */}
            <div className="mt-4 h-80 flex items-center justify-center bg-slate-50 rounded-lg text-gray-500">
                Chart will be displayed here
            </div>
        </div>
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Jobs</h3>
            <ul className="mt-4 space-y-4">
                {upcomingJobs.map(job => (
                    <li key={job.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50">
                        <UserCircleIcon className="h-10 w-10 text-gray-400"/>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{job.customer}</p>
                            <p className="text-sm text-gray-600">{job.service}</p>
                            <p className="flex items-center text-xs text-gray-500 mt-1"><ClockIcon className="h-3 w-3 mr-1"/>{job.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;