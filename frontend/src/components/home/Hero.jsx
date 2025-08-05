import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your local images from the assets folder
import heroImage1 from '../../assets/hero/hero-1.jpg';
import heroImage2 from '../../assets/hero/hero-2.jpg';
import heroImage3 from '../../assets/hero/hero-3.jpg';

const carouselImages = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 4000); // Carousel changes every 4 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="w-full rounded-xl bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">

          {/* ====== Left Side: Text Content ====== */}
          <div className="flex flex-col justify-center px-6 py-12 text-center lg:py-24 lg:px-8 lg:text-left">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-base font-semibold text-teal-600 tracking-wider uppercase">
                Verified Professionals all over India
              </p>
              <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                The Best Local Services, 
                <span className="mt-2 block bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Right at Your Fingertips
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                From home essentials to personal wellness, connect with trusted experts who are ready to help. Simple, secure, and satisfactory.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  to="/services"
                  className="inline-block rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-3 text-center font-medium text-white shadow-lg transition hover:shadow-xl"
                >
                  Explore Services
                </Link>
                <Link
                  to="/become-provider"
                  className="inline-block rounded-full bg-white px-8 py-3 text-center font-medium text-teal-600 shadow-lg ring-1 ring-inset ring-gray-200 transition hover:bg-gray-50"
                >
                  Become a Provider
                </Link>
              </div>
            </div>
          </div>

          {/* ====== Right Side: Image Carousel ====== */}
          <div className="relative h-80 lg:h-full">
            <div className="absolute inset-0 overflow-hidden">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 h-full w-full transition-opacity duration-1000"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  <img
                    src={image}
                    alt={`Carousel slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {/* Subtle vignette overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              ))}
            </div>
            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;