// Welcome page for new users that want information about the app.

import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Hero Section */}
      <section className="relative bg-white rounded-lg shadow-lg py-12 text-center mb-8 max-w-7xl mx-auto overflow-hidden">
        <img src="/images/landingpage/background-1.png" alt="A vibrant city skyline at sunrise" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-gray-900">Welcome to UrbanCarpool!</h1>
          <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
            Your platform to connect drivers and passengers for affordable, eco-friendly shared rides.
          </p>
          <div className="mt-8 space-x-4">
            <a href="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
              Sign Up for Free
            </a>
            <a href="#learn-more" className="inline-block bg-gray-100 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-transform transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose UrbanCarpool?</h2>
        <div className="flex flex-wrap justify-around">
          {/* Feature 1 */}
          <div className="w-full md:w-1/3 p-4">
            <img src="/images/landingpage/eco-friendly.jpg" alt="Eco-friendly" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Eco-friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">Reduce your carbon footprint by sharing rides and saving fuel.</p>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/3 p-4">
            <img src="/images/landingpage/affortable.jpg" alt="Affordable" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Affordable</h3>
            <p className="text-gray-600 dark:text-gray-300">Share travel costs with passengers and make your trip more affordable.</p>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/3 p-4">
            <img src="/images/landingpage/convenient.jpg" alt="Convenient" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Convenient</h3>
            <p className="text-gray-600 dark:text-gray-300">Find rides and passengers easily using our intuitive platform.</p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="learn-more" className="relative bg-white rounded-lg shadow-lg py-10 px-6 mb-8 max-w-7xl mx-auto overflow-hidden">
        <img src="/images/landingpage/background-2.png" alt="Green hills and a clean city" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> 
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold text-gray-900 text-center">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-700 text-center">
            At Urban Carpool, our goal is to create a more sustainable and efficient transportation system by promoting ride-sharing. We believe in reducing traffic, lowering emissions, and fostering a sense of community. Every ride shared is a step towards a greener future.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="text-center p-6">
            <div className="mb-4 text-indigo-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M4 6h16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">1. Create Your Account</h3>
            <p className="text-gray-600 dark:text-gray-300">Sign up easily and start exploring available rides near you.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center p-6">
            <div className="mb-4 text-indigo-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">2. Find a Ride</h3>
            <p className="text-gray-600 dark:text-gray-300">Search for rides or publish your own to share the journey.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center p-6">
            <div className="mb-4 text-indigo-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">3. Enjoy the Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">Meet new people, save money, and help the environment!</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to get started?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Join UrbanCarpool today and start sharing rides with ease.</p>
        <a href="/signup" className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300">
          Create Your Account
        </a>
      </section>
    </div>
  );
};

export default Home;
