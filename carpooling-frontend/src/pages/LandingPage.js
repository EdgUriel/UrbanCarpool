import React from 'react';

function LandingPage() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen rounded-lg shadow-lg mx-auto my-2" style={{ padding: '10px 20px', maxWidth: '95%', margin: '20px auto' }}> {/* Asegura que el div ocupe al menos la altura de la pantalla */}

            {/* Main Content */}
            <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Cambié el padding y el height */}
                {/* Hero Section */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Join the Urban Carpool Revolution</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">A smarter, greener way to commute. Save money and reduce your carbon footprint by sharing rides with others.</p>
                    <div className="mt-6">
                        <a href="/login" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Get Started</a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Cost Efficient</h2>
                        <p className="text-gray-600 dark:text-gray-300">Share the cost of your commute and save money each month.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Eco-Friendly</h2>
                        <p className="text-gray-600 dark:text-gray-300">Reduce your carbon footprint by sharing rides and helping the environment.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Community Driven</h2>
                        <p className="text-gray-600 dark:text-gray-300">Connect with other commuters in your area and make new friends.</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
                    <blockquote className="border-l-4 border-blue-700 pl-4 italic text-gray-600 dark:text-gray-300">
                        "Using Urban Carpool has changed my daily commute for the better. I save money and have met great people!" - Alex M.
                    </blockquote>
                    <blockquote className="border-l-4 border-blue-700 pl-4 italic text-gray-600 dark:text-gray-300 mt-4">
                        "I love how easy it is to find rides. It’s a win-win for my wallet and the planet!" - Sarah L.
                    </blockquote>
                </section>
            </main>

        </div>
    );
}

export default LandingPage;
