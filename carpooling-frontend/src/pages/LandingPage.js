import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white">
            <div className="absolute inset-0 bg-[url('/images/landingpage/background-1.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Join the Urban Carpool Revolution
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
                Transform your commute: Save money, reduce emissions, and build stronger communities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#learn-more" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-150 ease-in-out">
                    Learn More
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

        {/* Carpool Images Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src="/images/landingpage/carpooling-1.jpg" alt="A carpool of friends commuting together" className="rounded-lg shadow-lg object-cover h-80 w-full" />
                <img src="/images/landingpage/carpooling-2.jpg" alt="A group of colleagues sharing a ride to work" className="rounded-lg shadow-lg object-cover h-80 w-full" />
            </div>
            </div>
        </section>

        {/* Our Mission Section */}
        <section id="learn-more" className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                At Urban Carpool, we're creating a more sustainable and efficient transportation system through ride-sharing. Our goal is to reduce traffic, lower emissions, and foster community connections. Every shared ride is a step towards a greener, more connected future.
                </p>
            </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why Choose Urban Carpool?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                { emoji: '💰', title: 'Cost Efficient', description: 'Split costs on gas, parking, and maintenance, saving you money every month.' },
                { emoji: '🌿', title: 'Eco-Friendly', description: 'Reduce your carbon footprint with fewer cars on the road, leading to lower emissions.' },
                { emoji: '🤝', title: 'Community Driven', description: 'Meet new people, foster friendships, and create a stronger sense of community.' },
                ].map((benefit, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <div className="text-4xl mb-4">{benefit.emoji}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                { quote: "Urban Carpool has made my commute so much more enjoyable. I save money and I've met some great people along the way!", author: "Alex M." },
                { quote: "I love how easy it is to find a carpool and reduce my environmental impact. It's been a game-changer for me!", author: "Sarah L." },
                ].map((testimonial, index) => (
                <div key={index} className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                    <p className="text-lg mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.author}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* User Experience Images Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <img src="/images/landingpage/happy-drivers.jpg" alt="A driver smiling during a carpool" className="rounded-lg shadow-lg object-cover h-64 w-full" />
                <img src="/images/landingpage/happy-passengers.jpg" alt="A passenger enjoying the carpool ride" className="rounded-lg shadow-lg object-cover h-64 w-full" />
                <img src="/images/landingpage/carpooling-comunity.jpg" alt="Carpooling community event" className="rounded-lg shadow-lg object-cover h-64 w-full" />
            </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join the movement and help create a more sustainable future. Sign up now and start carpooling with Urban Carpool today!
            </p>
            </div>
        </section>
        </div>
    );
};

export default LandingPage;