import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTrendingUpIcon, BanknotesIcon, UsersIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Grow Your Business',
    description: 'Access a steady stream of new customers in your city without the marketing hassle.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Flexible Schedule, Instant Payouts',
    description: 'Work on your own terms and get paid securely and promptly after every completed job.',
    icon: BanknotesIcon,
  },
  {
    name: 'A Community of Professionals',
    description: 'Join a network of top-rated professionals and get the support you need to succeed.',
    icon: UsersIcon,
  },
];

const ProviderCTA = () => {
  return (
    <section className="relative w-full bg-slate-800 rounded-xl shadow-xl text-white py-16 sm:py-20">
      {/* Background abstract pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-provider" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0h40v40H0z" fill="none" />
              <path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-provider)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text and CTA */}
          <div className="text-center lg:text-left">
            <p className="text-base font-semibold text-teal-400 tracking-wider">FOR PROFESSIONALS</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Grow Your Business With Us
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300 mx-auto lg:mx-0">
              Are you a skilled professional looking for more customers? Join our platform and connect with thousands of users seeking your expertise.
            </p>
            <div className="mt-8">
              <Link
                to="/become-provider"
                className="inline-block rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-8 py-3 text-center font-bold text-white shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
              >
                Sign Up as a Provider
              </Link>
            </div>
          </div>

          {/* Right Side: Benefits */}
          <div className="flex flex-col gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex items-start gap-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-700 text-teal-400">
                    <benefit.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{benefit.name}</h3>
                  <p className="mt-1 text-base text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProviderCTA;