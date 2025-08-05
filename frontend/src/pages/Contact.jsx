import React from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="bg-white">
      <main className="overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to share feedback, our team is ready to help.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Grid Section */}
        <section className="relative bg-white">
          <div className="absolute h-1/2 w-full bg-gray-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Contact Information */}
              <div className="rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 p-8 shadow-2xl text-white">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="mt-2 text-blue-100">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <dl className="mt-8 space-y-6 text-base text-blue-50">
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                    </dt>
                    <dd>+91 (123) 456-7890</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                    </dt>
                    <dd>support@localtrust.com</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <BuildingOffice2Icon className="h-6 w-6" aria-hidden="true" />
                    </dt>
                    <dd>B-27/56, Durgakund<br/>Varanasi, Uttar Pradesh, 221005</dd>
                  </div>
                </dl>
              </div>

              {/* Right Column: Contact Form */}
              <div className="rounded-2xl bg-white p-8 shadow-2xl lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First name</label>
                    <div className="mt-1"><input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" /></div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last name</label>
                    <div className="mt-1"><input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" /></div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                    <div className="mt-1"><input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" /></div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                    <div className="mt-1"><textarea id="message" name="message" rows={4} className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue={''} /></div>
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl shadow-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.747971717326!2d82.9997424148906!3d25.27863618385808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e310e5365798d%3A0x6b3ab2d645e64858!2sDurgakund%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1660000000000"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default Contact;