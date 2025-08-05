import React from 'react';
import { CalendarIcon, ClockIcon, PlusIcon, UserCircleIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const appointmentsToday = [
    { time: '11:00 AM', customer: 'Rohan Kumar', service: 'Interior Design Consultation' },
    { time: '02:00 PM', customer: 'Anjali Verma', service: 'Single Room Makeover' },
];

const Schedule = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
                    <p className="mt-1 text-gray-600">View your appointments and manage your availability.</p>
                </div>
                <button className="mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-slate-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:bg-slate-800 transition-all duration-300">
                    <PlusIcon className="h-5 w-5" />
                    Block Off Time
                </button>
            </div>

            {/* Main Grid: Calendar and Today's Agenda */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Side: Calendar View */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">August 2025</h3>
                    {/* Placeholder for a calendar library */}
                    <div className="h-96 flex items-center justify-center bg-slate-50 rounded-lg text-gray-500">
                        Interactive Calendar View will be displayed here
                    </div>
                     <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-blue-500"></div>Booked Slot</div>
                        <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-gray-300"></div>Unavailable</div>
                    </div>
                </div>

                {/* Right Side: Today's Agenda */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Agenda (Aug 4, 2025)</h3>
                    <ul className="space-y-4">
                        {appointmentsToday.length > 0 ? (
                            appointmentsToday.map(job => (
                                <li key={job.time} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-50 border">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs">
                                        {job.time.split(' ')[0]}
                                        <span className="text-[10px] ml-0.5">{job.time.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">{job.customer}</p>
                                        <p className="text-sm text-gray-600">{job.service}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="text-center py-8 text-gray-500">
                                No appointments for today.
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Schedule;