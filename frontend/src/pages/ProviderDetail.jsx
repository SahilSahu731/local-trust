import React from 'react';
import ProviderHeader from '../components/provider/ProviderHeader';
import Gallery from '../components/provider/Gallery';
import ServiceList from '../components/provider/ServiceList';
import ReviewSection from '../components/provider/ReviewSection';
import BookingWidget from '../components/provider/BookingWidget';

const ProviderDetail = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          
          {/* Left Column: Main Content */}
          <main className="lg:col-span-2 space-y-8">
            <ProviderHeader />
            {/* <Gallery /> */}
            <ServiceList />
            <ReviewSection />
          </main>

          {/* Right Column: Booking Widget (Sticky) */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="sticky top-24">
              <BookingWidget />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;