// Lets users modify account settings, change passwords, and manage payment methods.

import React, { useState } from 'react';

function AccountSettings() {
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
    });
    const [paymentMethods, setPaymentMethods] = useState([
        { id: 1, type: 'Credit Card', lastFour: '1234' },
    ]);

    const handleSaveChanges = () => {
        // Lógica para guardar los cambios
        console.log('Changes saved');
    };

    const handleAddPaymentMethod = () => {
        // Lógica para agregar un nuevo método de pago
        console.log('Add new payment method');
    };

    const handleDeletePaymentMethod = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    const toggleNotification = (type) => {
        setNotifications({
            ...notifications,
            [type]: !notifications[type],
        });
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h1>

                {/* Change Password */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Change Password</h2>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                {/* Notifications Settings */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Notification Settings</h2>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={() => toggleNotification('email')}
                            className="mr-2"
                        />
                        <label className="text-gray-900 dark:text-white">Email Notifications</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={notifications.sms}
                            onChange={() => toggleNotification('sms')}
                            className="mr-2"
                        />
                        <label className="text-gray-900 dark:text-white">SMS Notifications</label>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Methods</h2>
                    {paymentMethods.map((method) => (
                        <div key={method.id} className="flex justify-between items-center mb-4">
                            <span className="text-gray-900 dark:text-white">
                                {method.type} ending in {method.lastFour}
                            </span>
                            <button
                                onClick={() => handleDeletePaymentMethod(method.id)}
                                className="text-red-600 hover:underline dark:text-red-400"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleAddPaymentMethod}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Add New Payment Method
                    </button>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSaveChanges}
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
