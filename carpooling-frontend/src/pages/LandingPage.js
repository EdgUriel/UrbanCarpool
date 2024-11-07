// First page users see with an overview of the app’s services, and options to sign up or log in.

import React from 'react';

function LandingPage() {
    return (
        <div className="bg-grey-100 min-h-screen">
            
            {/* Hero Section with Background Image */}
            <section className="relative bg-white rounded-lg shadow-lg py-12 text-center mb-8 max-w-7xl mx-auto overflow-hidden">
                <img src="/images/landingpage/background-1.png" alt="A vibrant city skyline at sunrise" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> {/* Imagen de fondo más descriptiva */}
                <div className="relative z-10"> {/* Contenido con posición relativa para estar encima del fondo */}
                    <h1 className="text-5xl font-bold text-gray-900">Join the Urban Carpool Revolution</h1>
                    <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
                        Urban Carpool is transforming the way we commute. By sharing rides, we’re saving money, reducing our carbon footprint, and building stronger communities.
                    </p>
                    <div className="mt-8 space-x-4">
                        <a href="/login" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Get Started
                        </a>
                        <a href="#learn-more" className="inline-block bg-gray-100 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-transform transform hover:scale-105">
                            Learn More
                        </a> {/* Botón adicional de 'Learn More' */}
                    </div>
                </div>
            </section>

            {/* Carpool Images Section */}
            <section className="relative max-w-7xl mx-auto mb-8 px-4">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img src="/images/landingpage/carpooling-1.jpg" alt="A carpool of friends commuting together" className="rounded-lg shadow-lg h-80 w-full object-cover" />
                    <img src="/images/landingpage/carpooling-2.jpg" alt="A group of colleagues sharing a ride to work" className="rounded-lg shadow-lg h-80 w-full object-cover" />
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

            {/* Benefits Section */}
            <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
                <img src="/images/landingpage/background-3.png" alt="A sunny road in the city" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> {/* Imagen de fondo */} 
                <div className="relative z-10 bg-white hover:bg-[#E0E0E0] transition-all rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cost Efficient</h3>
                    <p className="text-gray-700">
                        Sharing rides means splitting the cost of gas, parking, and maintenance, saving you money every month.
                    </p>
                </div>
                <div className="relative z-10 bg-white hover:bg-[#E0E0E0] transition-all rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eco-Friendly</h3>
                    <p className="text-gray-700">
                        Reduce your carbon footprint by carpooling. Fewer cars on the road means fewer emissions and a cleaner environment.
                    </p>
                </div>
                <div className="relative z-10 bg-white hover:bg-[#E0E0E0] transition-all rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Driven</h3>
                    <p className="text-gray-700">
                        Meet new people, foster friendships, and create a stronger sense of community with every shared ride.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative bg-white rounded-lg shadow-lg py-10 px-6 mb-8 max-w-7xl mx-auto overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Our Users Say</h2>
                    <div className="space-y-6">
                        <blockquote className="border-l-4 border-[#FFE0B2] pl-4 italic text-gray-700">
                            "Urban Carpool has made my commute so much more enjoyable. I save money and I’ve met some great people along the way!" - Alex M.
                        </blockquote>
                        <blockquote className="border-l-4 border-[#FFE0B2] pl-4 italic text-gray-700">
                            "I love how easy it is to find a carpool and reduce my environmental impact. It’s been a game-changer for me!" - Sarah L.
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* User Experience Images Section */}
            <section className="relative max-w-7xl mx-auto mb-8 px-4">
                <img src="/images/backgrounds/user-exp-bg.jpg" alt="People happily commuting together" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> {/* Imagen de fondo */} 
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <img src="/images/landingpage/happy-drivers.jpg" alt="A driver smiling during a carpool" className="rounded-lg shadow-lg h-66 w-full object-cover" />
                    <img src="/images/landingpage/happy-passengers.jpg" alt="A passenger enjoying the carpool ride" className="rounded-lg shadow-lg h-66 w-full object-cover" />
                    <img src="/images/landingpage/carpooling-comunity.jpg" alt="Carpooling community event" className="rounded-lg shadow-lg h-66 w-full object-cover" />
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative bg-white rounded-lg shadow-lg py-12 text-center max-w-7xl mx-auto overflow-hidden">
                <img src="/images/landingpage/background-4.png" alt="A sunny morning in the city" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> {/* Imagen de fondo */}
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        Join the movement and help create a more sustainable future. Sign up now and start carpooling with Urban Carpool today!
                    </p>
                    <a href="/signup" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-transform transform hover:scale-105">
                        Sign Up
                    </a>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
