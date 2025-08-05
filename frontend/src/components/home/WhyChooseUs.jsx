import React from 'react';
import { ShieldCheckIcon, WalletIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Verified Professionals',
    description: 'Every professional is background-checked and verified for quality and safety, ensuring you get the best service.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Secure & Transparent Payments',
    description: 'Pay securely through our platform only after your service is complete. No hidden fees, ever. Total transparency.',
    icon: WalletIcon,
  },
  {
    name: 'Satisfaction Guarantee',
    description: 'We stand by the quality of our services. If you\'re not completely satisfied, we promise to make it right.',
    icon: StarIcon,
  },
  {
    name: 'On-Time, Every Time',
    description: 'Book with confidence. Our professionals are committed to punctuality and timely completion of the job.',
    icon: ClockIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-slate-200 rounded-xl shadow-xl py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-600 tracking-wider">Our Promise</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Peace of Mind is Our Priority
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            We've built our platform on a foundation of trust and security, so you can book with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start gap-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl leading-7 font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;