import React, { useState } from 'react';
import { StarIcon, CalendarIcon, ClockIcon, UserGroupIcon, CurrencyRupeeIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const bookings = {
    upcoming: [
        { id: 1, service: 'Interior Design Consultation', provider: 'Elena Garcia', date: 'August 15, 2025', time: '11:00 AM', status: 'Confirmed', price: 2500 },
    ],
    completed: [
        { id: 2, service: 'Master Plumbing Checkup', provider: 'Mark Johnson', date: 'July 28, 2025', time: '02:00 PM', status: 'Completed', price: 1500 },
    ],
    cancelled: [
        { id: 3, service: 'Pro House Cleaning', provider: 'Aisha Khan', date: 'July 10, 2025', time: '09:00 AM', status: 'Cancelled', price: 3000 },
    ]
};

const BookingCard = ({ booking }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{booking.service}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1"><UserGroupIcon className="h-4 w-4"/> Provided by {booking.provider}</p>
                </div>
                <div className={`mt-2 sm:mt-0 text-sm font-bold px-3 py-1 rounded-full ${
                    booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                }`}>
                    {booking.status}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                <p className="flex items-center gap-2"><CalendarIcon className="h-5 w-5 text-gray-400"/> {booking.date}</p>
                <p className="flex items-center gap-2"><ClockIcon className="h-5 w-5 text-gray-400"/> {booking.time}</p>
                <p className="flex items-center gap-2 font-semibold"><CurrencyRupeeIcon className="h-5 w-5 text-gray-400"/> {booking.price.toLocaleString()}</p>
            </div>
            {booking.status === 'Completed' && (
                <div className="border-t pt-4 flex justify-end">
                    <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-500">
                        <StarIcon className="h-4 w-4"/> Leave a Review
                    </button>
                </div>
            )}
            {booking.status === 'Confirmed' && (
                 <div className="border-t pt-4 flex justify-end gap-4">
                    <button className="text-sm font-semibold text-gray-600 hover:text-gray-800">Reschedule</button>
                    <button className="text-sm font-semibold text-red-600 hover:text-red-800">Cancel Booking</button>
                </div>
            )}
        </div>
    )
}


const MyBookings = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            
            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Upcoming ({bookings.upcoming.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'completed' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Completed ({bookings.completed.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('cancelled')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'cancelled' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Cancelled ({bookings.cancelled.length})
                    </button>
                </nav>
            </div>

            {/* Booking Cards */}
            <div className="space-y-6">
                {bookings[activeTab].length > 0 ? (
                    bookings[activeTab].map(booking => <BookingCard key={booking.id} booking={booking} />)
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl shadow-sm border">
                        <p className="text-gray-500">You have no {activeTab} bookings.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;