import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Local Service Marketplace - your one-stop destination for finding 
            reliable local service providers in your area.
          </p>
          
          <p className="text-lg text-gray-600 mb-6">
            We're building this platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) 
            to provide a seamless experience for both customers and service providers.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            To connect customers with trusted local service providers, making it easy to find, 
            book, and pay for services in your neighborhood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;