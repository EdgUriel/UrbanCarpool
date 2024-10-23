import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-lg mx-auto my-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/home" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="UrbanCarpool Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UrbanCarpool</span>
        </a>

        {/* Right section */}
        <div className="flex items-center md:order-2">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full" onClick={toggleDropdown}>
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="/images/people/profile-picture-3.jpg" alt="User" />
          </button>

          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute top-14 right-10 mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@urbancarpool.com</span>
              </div>
              <ul className="py-2">
                <li>
                  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Dashboard</a>
                </li>
                <li>
                  <a href="/account-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Settings</a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Sign out</a>
                </li>
              </ul>
            </div>
          )}

          <button type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Main Menu */}
        <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li><a href="/home" className="block px-3 py-2 text-gray-900 dark:text-white">Home</a></li>
            <li><a href="/dashboard" className="block px-3 py-2 text-gray-900 dark:text-white">Dashboard</a></li>
            <li><a href="/mainpage" className="block px-3 py-2 text-gray-900 dark:text-white">Map Page</a></li>
            <li><a href="/publish-ride" className="block px-3 py-2 text-gray-900 dark:text-white">Publish Ride</a></li>
            <li><a href="/search-ride" className="block px-3 py-2 text-gray-900 dark:text-white">Search Ride</a></li>
            <li><a href="/supportpage" className="block px-3 py-2 text-gray-900 dark:text-white">Support</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
