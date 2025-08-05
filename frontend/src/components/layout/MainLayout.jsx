import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-100 ">
      <Navbar />
      
      {/* Outlet will render the current page's component */}
      <main className="flex-grow">
        <div className="max-w-screen mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;