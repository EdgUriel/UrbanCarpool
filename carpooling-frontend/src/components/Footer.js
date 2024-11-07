import React, { useState } from 'react';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 bottom-0 shadow-lg">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0">
            <a href="/home" className="flex items-center space-x-3">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="UrbanCarpool Logo" />
                <span className="self-center text-2xl font-semibold dark:text-white">UrbanCarpool</span>
            </a>
            </div>

            {/* Links */}
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
            <li><a href="/about" className="text-gray-700 hover:underline dark:text-gray-400">About Us</a></li>
            <li><a href="/privacy" className="text-gray-700 hover:underline dark:text-gray-400">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-700 hover:underline dark:text-gray-400">Terms of Service</a></li>
            <li><a href="/contact" className="text-gray-700 hover:underline dark:text-gray-400">Contact</a></li>
            </ul>

        </div>
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 UrbanCarpool. All Rights Reserved.
        </div>
        </footer>
    );
}

export default Footer;
