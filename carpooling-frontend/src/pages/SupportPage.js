import React from 'react';

const SupportPage = () => {
    return (
        <div className="bg-grey-100 min-h-screen">
        
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-lg py-12 text-center mb-8 max-w-7xl mx-auto relative">
            <img src="images/icons/carpooling-icon.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" /> {/* Imagen de fondo */}
            <div className="relative z-10">
                <h1 className="text-5xl font-bold text-gray-900 flex justify-center items-center">
                    <img src="images/icons/car-icon.svg" alt="Support Icon" className="mr-4 w-12 h-12" /> {/* Icono de soporte */}
                    Urban Carpool Support
                </h1>
                <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
                    Need help? We’re here to assist both drivers and passengers with any issues, from payments and trip details to technical support.
                </p>
            </div>
        </section>

        {/* Support Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Payments */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/payment-icon.svg" alt="Payment Icon" className="w-8 h-8 mb-4" /> {/* Icono de pagos */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Information</h2>
                <p className="text-gray-700">
                    Learn about payment methods, refund policies, and how to manage your payment preferences.
                </p>
                <a href="/support/payments" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    Learn More
                </a>
            </div>

            {/* Trip History */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/trip-icon.svg" alt="Trip Icon" className="w-8 h-8 mb-4" /> {/* Icono de viajes */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trip History & Details</h2>
                <p className="text-gray-700">
                    View details of your past trips, including trip routes, costs, and driver/passenger information.
                </p>
                <a href="/trip-history" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    View Trips
                </a>
            </div>

            {/* Complaints and Reports */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/complaint-icon.svg" alt="Complaint Icon" className="w-8 h-8 mb-4" /> {/* Icono de reportes */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complaints & Reports</h2>
                <p className="text-gray-700">
                    Have an issue with a driver or passenger? Let us know, and we’ll investigate any complaints or incidents.
                </p>
                <a href="/support/complaints" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    File a Complaint
                </a>
            </div>

            {/* Updates & News */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/news-icon.svg" alt="News Icon" className="w-8 h-8 mb-4" /> {/* Icono de noticias */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates & News</h2>
                <p className="text-gray-700">
                    Stay informed about the latest features, updates, and news from Urban Carpool.
                </p>
                <a href="/support/updates" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    See Updates
                </a>
            </div>

            {/* Technical Support */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/tech-support-icon.svg" alt="Technical Support Icon" className="w-8 h-8 mb-4" /> {/* Icono de soporte técnico */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Support</h2>
                <p className="text-gray-700">
                    Experiencing technical issues? Our support team is here to help resolve any problems with the app.
                </p>
                <a href="/support/technical" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    Get Help
                </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <img src="images/icons/faq-icon.svg" alt="FAQ Icon" className="w-8 h-8 mb-4" /> {/* Icono de FAQ */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>
                <p className="text-gray-700">
                    Have questions? Check out our Frequently Asked Questions for quick answers to common issues.
                </p>
                <a href="/support/faq" className="mt-auto inline-block text-[#FFE0B2] hover:text-[#FFD699] font-semibold">
                    View FAQ
                </a>
            </div>
        </section>

        </div>
    );
};

export default SupportPage;
