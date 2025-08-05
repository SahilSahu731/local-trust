import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/solid';

// Placeholder data for team members
const team = [
  {
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Diya Patel',
    role: 'Head of Operations',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Rohan Gupta',
    role: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
  },
];

const About = () => {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1563286094-634237b45736?q=80&w=2832&auto=format&fit=crop"
                  alt="Varanasi cityscape"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Connecting Our Community.</span>
                  <span className="block text-blue-200">Empowering Local Pros.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-100 sm:max-w-3xl">
                  We are on a mission to make finding reliable local services in Varanasi simple, secure, and trustworthy for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">Our Story</p>
                    <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Founded in the Heart of Varanasi
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
                        LocalTrust was born from a simple idea: what if finding a skilled plumber, electrician, or painter was as easy as ordering food online? Frustrated by the lack of a reliable platform, we set out to build a service that connects households with verified, high-quality local professionals.
                    </p>
                </div>
            </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base font-semibold text-teal-600">Our Values</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Principles That Guide Us
                    </h2>
                </div>
                <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-x-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white">
                            <ShieldCheckIcon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-gray-900">Trust & Safety</h3>
                        <p className="mt-2 text-base text-gray-600">Every professional is background-checked and verified. Your safety is our top priority.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white">
                            <SparklesIcon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-gray-900">Commitment to Quality</h3>
                        <p className="mt-2 text-base text-gray-600">We are obsessed with quality. We only partner with professionals who share our commitment to excellence.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white">
                            <UsersIcon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-gray-900">Community Empowerment</h3>
                        <p className="mt-2 text-base text-gray-600">By connecting customers with local pros, we help grow small businesses and strengthen our community.</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Meet the Team Section */}
        <div className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a passionate group of problem-solvers dedicated to making your life easier.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Join our growing community today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Whether you're looking for a service or you're a professional ready to grow your business, we're here for you.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                <Link
                to="/auth/signup"
                className="inline-block rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-3 text-center font-medium text-white shadow-lg transition hover:shadow-xl"
                >
                Get Started
                </Link>
                <Link
                to="/contact"
                className="inline-block rounded-full bg-white px-8 py-3 text-center font-medium text-blue-600 shadow-lg ring-1 ring-inset ring-gray-200 transition hover:bg-gray-50"
                >
                Contact Us
                </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;