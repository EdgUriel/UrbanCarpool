import React from 'react';
import { ArrowRight, Car, DollarSign, Leaf, MapPin, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-[url('/images/city-traffic.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Travel Smart with UrbanCarpool
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8">
              Connect, share, and save on your daily trips
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/signup" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
                Sign up for free
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-150 ease-in-out">
                How it works
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-white" viewBox="0 0 1440 120">
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Why choose UrbanCarpool?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Eco-Friendly', description: 'Reduce your carbon footprint by sharing rides and saving fuel.' },
              { icon: DollarSign, title: 'Affordable', description: 'Share travel costs and make your trips more affordable.' },
              { icon: Users, title: 'Social', description: 'Meet new people and make your trips more fun and enriching.' },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <feature.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            How it works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
            {[
              { icon: MapPin, title: 'Find a ride', description: 'Search for available rides or post your own to share the route.' },
              { icon: Car, title: 'Travel together', description: 'Connect with your driver or passengers and enjoy a shared ride.' },
              { icon: DollarSign, title: 'Save and contribute', description: 'Split costs, save money, and reduce environmental impact.' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="bg-blue-500 rounded-full p-4 mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What our users say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ana G.', role: 'Passenger', quote: 'UrbanCarpool has made my daily commutes more affordable and enjoyable. Highly recommended!' },
              { name: 'Carlos M.', role: 'Driver', quote: 'As a driver, I love being able to help others and reduce my travel costs at the same time.' },
              { name: 'Laura S.', role: 'Frequent Passenger', quote: 'The app is super easy to use, and I’ve met amazing people on my shared rides.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 ease-in-out">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/40?img=${index}`} alt={testimonial.name} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to start sharing rides?
          </h2>
          <p className="text-xl mb-8">
            Join UrbanCarpool today and start enjoying smarter shared rides.
          </p>
          <a href="/signup" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
            Create your free account
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
