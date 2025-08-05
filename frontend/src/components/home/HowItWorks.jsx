import React from 'react';
import { MagnifyingGlassIcon, CalendarDaysIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

const steps = [
    { 
        name: 'Step 1: Search & Discover', 
        description: 'Use our advanced search to find exactly what you need. Filter by service, location, and ratings to discover top professionals.', 
        icon: MagnifyingGlassIcon 
    },
    { 
        name: 'Step 2: Book & Confirm', 
        description: 'Select a convenient time slot and book your service in just a few clicks. Your booking is confirmed instantly.', 
        icon: CalendarDaysIcon 
    },
    { 
        name: 'Step 3: Relax & Review', 
        description: 'Your chosen professional arrives and completes the job to your satisfaction. Leave a review to help our community grow.', 
        icon: CheckBadgeIcon 
    }
];

const HowItWorks = () => {
    return (
        <section className="w-full bg-slate-200 shadow-xl rounded-xl py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-teal-600 tracking-wider">Simplicity</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Your Satisfaction in Three Easy Steps
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        We've streamlined the entire process for your convenience.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* The connecting line - hidden on mobile, visible on desktop */}
                    {/* <div 
                        className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100"
                        aria-hidden="true"
                    ></div> */}

                    <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col  items-center bg-zinc-100 shadow-xl p-6 rounded-2xl text-center">
                                <div className="z-10 flex items-center justify-center h-16 w-16 bg-white rounded-full ring-8 ring-white shadow-md">
                                    <step.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.name}</h3>
                                <p className="mt-2 text-base text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;