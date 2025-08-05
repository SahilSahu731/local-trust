import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarDaysIcon, CreditCardIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

// In a real app, this data would be passed from the previous page
const orderDetails = {
    providerName: 'Elena Garcia',
    serviceName: 'Single Room Makeover',
    price: 15000,
    serviceFee: 299,
};

// --- Sub-components for each step ---

const Step1_Schedule = ({ onNext }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900">Confirm Address & Schedule</h2>
        <p className="mt-2 text-gray-600">Choose a convenient date and time for your service.</p>
        <div className="mt-6 space-y-6">
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Service Address</label>
                <input type="text" id="address" defaultValue="Varanasi, UP" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Select Date</label>
                {/* Static calendar UI */}
                <div className="mt-1 p-4 border rounded-md">Calendar placeholder...</div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Available Times</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <button className="p-2 border rounded-md hover:bg-blue-50">09:00 AM</button>
                    <button className="p-2 border rounded-md bg-blue-600 text-white">11:00 AM</button>
                    <button className="p-2 border rounded-md hover:bg-blue-50">02:00 PM</button>
                </div>
            </div>
        </div>
        <button onClick={onNext} className="mt-8 w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700">
            Proceed to Payment
        </button>
    </div>
);

const Step2_Payment = ({ onNext }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900">Choose Payment Method</h2>
        <p className="mt-2 text-gray-600">All transactions are secure and encrypted.</p>
        <div className="mt-6 space-y-4">
            {/* Static payment form UI */}
            <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" id="card-number" placeholder="•••• •••• •••• ••••" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            {/* More fields like Expiry, CVC would go here */}
        </div>
        <button onClick={onNext} className="mt-8 w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700">
            Pay ₹{orderDetails.price + orderDetails.serviceFee}
        </button>
    </div>
);

const Step3_Confirmation = () => (
    <div className="text-center">
        <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
        <p className="mt-2 text-gray-600">Your appointment with {orderDetails.providerName} is scheduled. You will receive a confirmation email shortly.</p>
        <div className="mt-8">
            <Link to="/my-bookings" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Go to My Bookings
            </Link>
        </div>
    </div>
);

const CheckoutPage = () => {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1_Schedule onNext={() => setStep(2)} />;
            case 2:
                return <Step2_Payment onNext={() => setStep(3)} />;
            case 3:
                return <Step3_Confirmation />;
            default:
                return <Step1_Schedule onNext={() => setStep(2)} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Checkout Steps */}
                    <main className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                        {renderStep()}
                    </main>

                    {/* Right Column: Order Summary */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Order Summary</h3>
                            <div className="mt-4 space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{orderDetails.serviceName}</span>
                                    <span className="font-medium">₹{orderDetails.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Service Fee</span>
                                    <span className="font-medium">₹{orderDetails.serviceFee}</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                    <span className="text-gray-900">Total</span>
                                    <span className="text-blue-600">₹{(orderDetails.price + orderDetails.serviceFee).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;