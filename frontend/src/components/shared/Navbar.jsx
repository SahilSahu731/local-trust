import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  BriefcaseIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { LayoutDashboard, LogOutIcon, MoveUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store/slices/authSlice";
import { toggleTheme } from "../../store/slices/themeSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    // You might also call the logoutUser service here if needed
    dispatch(logoutSuccess());
  };

  // Style for active NavLink
  const activeLinkStyle = {
    color: "white",
    borderBottom: "2px solid #2dd4bf", // Tailwind's teal-400
  };

  return (
    <>
      <nav className="bg-blue-800 shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold cursor-pointer">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  LocalTrust
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                  <button
                    className="text-gray-300 hover:text-white flex gap-3 items-center border hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  >
                    <LayoutDashboard className="h-6 w-6" />
                    Dashboard
                  </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white flex gap-3 items-center border hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  >
                    <LogOutIcon className="h-6 w-6" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}

              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-lg cursor-pointer hidden text-gray-300 border border-gray-400 hover:bg-gray-700"
              >
                {mode === "light" ? (
                  <MoonIcon className="h-6 w-6" />
                ) : (
                  <SunIcon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6 cursor-pointer" />
                ) : (
                  <Bars3Icon className="block h-6 w-6 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu - Slide in from right */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg p-5 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white flex gap-3 items-center justify-start  px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <HomeIcon className="h-6 w-6" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-gray-300 hover:bg-gray-700 gap-3 hover:text-white flex items-center justify-start px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <BriefcaseIcon className="h-6 w-6" />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center justify-start gap-3 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <MoveUpRight className="h-6 w-6" />
              About
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-5 left-5 right-5 space-y-3">
          {isAuthenticated ? (
            <>
            <Link to="/dashboard">
              <button className="w-full text-gray-300 border mb-3 border-gray-600 flex gap-3 justify-start items-center hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                <LayoutDashboard className="h-6 w-6" />
                Dashboard
              </button>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-gray-300 border border-gray-600 flex gap-3 justify-start items-center hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <LogOutIcon className="h-6 w-6" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="w-full text-gray-300 border mb-3 border-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
