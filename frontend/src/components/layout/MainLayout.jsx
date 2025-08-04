import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      
      {/* Outlet will render the current page's component */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;