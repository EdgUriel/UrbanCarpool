import React from 'react';

const NotificationsPage = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-gray-100 dark:bg-gray-900 min-h-screen py-12">
            {/* Hero Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-xl py-12 text-center mb-12 max-w-7xl mx-auto relative overflow-hidden">
                <img 
                    src="images/icons/notifications-bg.jpg" 
                    alt="Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 transform scale-125" 
                />
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white flex justify-center items-center mb-4">
                        <img 
                            src="images/icons/notifications-icon.svg" 
                            alt="Notifications Icon" 
                            className="mr-4 w-12 h-12 animate-bounce" 
                        /> 
                        Your Notifications
                    </h1>
                    <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay updated with real-time notifications on trips, promotions, and important account alerts.
                    </p>
                </div>
            </section>

            {/* Notifications Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Trip Updates */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-start transition duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transform hover:-translate-y-1">
                    <img 
                        src="images/icons/trip-update-icon.svg" 
                        alt="Trip Update Icon" 
                        className="w-10 h-10 mb-4 animate-pulse" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Trip Updates</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Receive updates on your trips, including changes, delays, and cancellations in real time.
                    </p>
                    <a 
                        href="/notifications/trip-updates" 
                        className="mt-auto inline-block text-[#A3E635] hover:text-[#6EE7B7] font-semibold transition duration-300"
                    >
                        View Trip Updates →
                    </a>
                </div>

                {/* Promotions */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-start transition duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transform hover:-translate-y-1">
                    <img 
                        src="images/icons/promotion-icon.svg" 
                        alt="Promotions Icon" 
                        className="w-10 h-10 mb-4 animate-pulse" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Promotions</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Discover the latest deals and exclusive offers available to Urban Carpool users.
                    </p>
                    <a 
                        href="/notifications/promotions" 
                        className="mt-auto inline-block text-[#F472B6] hover:text-[#F9A8D4] font-semibold transition duration-300"
                    >
                        Explore Promotions →
                    </a>
                </div>

                {/* Reminders */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-start transition duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transform hover:-translate-y-1">
                    <img 
                        src="images/icons/reminder-icon-1.svg" 
                        alt="Reminder Icon" 
                        className="w-10 h-10 mb-4 animate-pulse" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Reminders</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Never miss a trip! Get notified about upcoming rides and pick-up times.
                    </p>
                    <a 
                        href="/notifications/reminders" 
                        className="mt-auto inline-block text-[#60A5FA] hover:text-[#93C5FD] font-semibold transition duration-300"
                    >
                        View Reminders →
                    </a>
                </div>

                {/* Security Alerts */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-start transition duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transform hover:-translate-y-1">
                    <img 
                        src="images/icons/security-icon.svg" 
                        alt="Security Icon" 
                        className="w-10 h-10 mb-4 animate-pulse" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Security Alerts</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Stay safe with alerts about suspicious account activity or potential security risks.
                    </p>
                    <a 
                        href="/notifications/security-alerts" 
                        className="mt-auto inline-block text-red-500 hover:text-red-700 font-semibold transition duration-300"
                    >
                        Check Security Alerts →
                    </a>
                </div>

                {/* Payment Updates */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col items-start transition duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transform hover:-translate-y-1">
                    <img 
                        src="images/icons/payment-icon.svg" 
                        alt="Payment Icon" 
                        className="w-10 h-10 mb-4 animate-pulse" 
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Payment Updates</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Get updates on payment methods, receipts, and fare adjustments for your trips.
                    </p>
                    <a 
                        href="/notifications/payment-updates" 
                        className="mt-auto inline-block text-[#38BDF8] hover:text-[#93C5FD] font-semibold transition duration-300"
                    >
                        View Payment Updates →
                    </a>
                </div>

            </section>
        </div>
    );
};

export default NotificationsPage;
