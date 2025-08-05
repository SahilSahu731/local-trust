import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  StarIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/solid';

// Full navigation for the desktop sidebar
const sidebarNav = [
  { name: 'Dashboard', href: '/provider-dashboard/overview', icon: ChartBarIcon },
  { name: 'My Services', href: '/provider-dashboard/services', icon: BriefcaseIcon },
  { name: 'Schedule', href: '/provider-dashboard/schedule', icon: CalendarDaysIcon },
  { name: 'Earnings', href: '/provider-dashboard/earnings', icon: BanknotesIcon },
  { name: 'Reviews', href: '/provider-dashboard/reviews', icon: StarIcon },
  { name: 'Profile', href: '/provider-dashboard/profile', icon: UserCircleIcon },
];

// Core navigation for the mobile bottom bar
const mobileNav = [
    { name: 'Dashboard', href: '/provider-dashboard/overview', icon: ChartBarIcon },
    { name: 'Services', href: '/provider-dashboard/services', icon: BriefcaseIcon },
    { name: 'Schedule', href: '/provider-dashboard/schedule', icon: CalendarDaysIcon },
    { name: 'Profile', href: '/provider-dashboard/profile', icon: UserCircleIcon },
];

const ProviderDashboardLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      
      {/* ===== Desktop Sidebar (Visible on lg screens and up) ===== */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:flex-shrink-0">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0 px-4">
               <Link to="/" className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                    LocalTrust
                  </span>
                </Link>
            </div>
            {/* Navigation */}
            <nav className="mt-8 flex-1 px-2 space-y-2">
              {sidebarNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon className="h-6 w-6 mr-3" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          {/* Logout Section */}
          <div className="flex-shrink-0 flex border-t p-4">
            <a href="#" className="flex-shrink-0 w-full group">
              <div className="flex items-center">
                <div><ArrowLeftOnRectangleIcon className="h-6 w-6 text-red-500 group-hover:text-red-700"/></div>
                <div className="ml-3"><p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Logout</p></div>
              </div>
            </a>
          </div>
        </div>
      </aside>

      {/* ===== Main Content Area ===== */}
      <main className="flex-1 overflow-y-auto">
        {/* Add padding to the content to prevent it from being hidden by the bottom nav on mobile */}
        <div className="py-8 px-4 sm:px-6 lg:px-8 pb-24 lg:pb-8">
            <Outlet /> {/* Child routes will be rendered here */}
        </div>
      </main>

      {/* ===== Mobile Bottom Navigation (Visible on screens smaller than lg) ===== */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-t-md z-50">
        <div className="grid grid-cols-4 h-16">
          {mobileNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className={({ isActive }) =>
                `flex flex-col items-center justify-center text-xs font-medium transition-colors duration-200 ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`
              }
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

    </div>
  );
};

export default ProviderDashboardLayout;