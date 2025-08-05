import React from 'react';
import FilterSidebar from '../components/services/FilterSidebar';
import ResultsSection from '../components/services/ResultsSection';

const Services = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          
          {/* Left Column: Filters */}
          <aside className="lg:col-span-1">
            <FilterSidebar />
          </aside>

          {/* Right Column: Search Results */}
          <main className="lg:col-span-3 mt-8 lg:mt-0">
            <ResultsSection />
          </main>

        </div>
      </div>
    </div>
  );
};

export default Services;