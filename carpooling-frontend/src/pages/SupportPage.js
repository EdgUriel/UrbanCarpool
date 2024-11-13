import React from 'react';
import { ArrowRight, HelpCircle, CreditCard, Map, AlertTriangle, Bell, Wrench, FigmaIcon as FAQIcon } from 'lucide-react';

const SupportPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white">
            <div className="absolute inset-0 bg-[url('/images/support-background.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Urban Carpool Support
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8">
                Need help? We're here to assist both drivers and passengers with any issues.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#support-sections" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
                    View Support Options
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-500 transition duration-150 ease-in-out">
                    Contact Us
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

        {/* Support Sections */}
        <section id="support-sections" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                How can we help you?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                { icon: CreditCard, title: 'Payment Information', description: 'Learn about payment methods, refund policies, and how to manage your payment preferences.', link: '/support/payments' },
                { icon: Map, title: 'Trip History & Details', description: 'View details of your past trips, including trip routes, costs, and driver/passenger information.', link: '/trip-history' },
                { icon: AlertTriangle, title: 'Complaints & Reports', description: 'Have an issue with a driver or passenger? Let us know, and we will investigate any complaints or incidents.', link: '/support/complaints' },
                { icon: Bell, title: 'Updates & News', description: 'Stay informed about the latest features, updates, and news from Urban Carpool.', link: '/support/updates' },
                { icon: Wrench, title: 'Technical Support', description: 'Experiencing technical issues? Our support team is here to help resolve any problems with the app.', link: '/support/technical' },
                { icon: FAQIcon, title: 'FAQ', description: 'Have questions? Check out our Frequently Asked Questions for quick answers to common issues.', link: '/support/faq' },
                ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <div className="p-6">
                    <item.icon className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a href={item.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
                Couldn't find what you're looking for?
            </h2>
            <p className="text-xl mb-8">
                Our support team is always here to help. Reach out to us directly.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
                Contact Support
                <HelpCircle className="ml-2 -mr-1 h-5 w-5" />
            </a>
            </div>
        </section>
    </div>
    );
};

export default SupportPage;