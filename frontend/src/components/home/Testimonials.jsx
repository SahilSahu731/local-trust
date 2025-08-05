import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// In a real app, this data would come from your database
const testimonials = [
  {
    quote: "The entire process was seamless. I found a fantastic plumber within minutes, and the job was done professionally. I'm never using another service again!",
    name: 'Priya Sharma',
    location: 'Lanka, Varanasi',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
  },
  {
    quote: "I was hesitant at first, but the quality of the service exceeded my expectations. The professional was courteous and highly skilled. Highly recommended!",
    name: 'Amit Singh',
    location: 'Sigra, Varanasi',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-slate-200 rounded-xl shadow-xl py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-600 tracking-wider">Voices of Our Community</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 xl:gap-x-12">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative flex flex-col-reverse bg-slate-50 rounded-xl p-8 shadow-sm"
            >
              <blockquote className="mt-6 text-gray-600">
                <p className="text-lg font-medium">“{testimonial.quote}”</p>
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <img className="h-14 w-14 rounded-full object-cover" src={testimonial.imageUrl} alt={testimonial.name} />
                <div className="flex-auto">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto text-center px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to Get Started?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                    Join thousands of satisfied customers in Varanasi. Find the help you need today.
                </p>
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-white px-8 py-3 text-center font-bold text-blue-600 shadow-lg transition hover:bg-blue-50"
                    >
                        Find Your Professional Now
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;