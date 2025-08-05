import React from 'react';
import { BanknotesIcon, ArrowDownOnSquareIcon, CurrencyRupeeIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const earningsData = {
    availableForPayout: 85200,
    pendingClearance: 15000,
    lifetimeEarnings: 405897
};

const transactions = [
    { id: 'txn_1', date: 'Aug 3, 2025', service: 'Single Room Makeover', amount: 15000, status: 'Pending' },
    { id: 'txn_2', date: 'Aug 1, 2025', service: 'Design Consultation', amount: 2500, status: 'Cleared' },
    { id: 'txn_3', date: 'Jul 28, 2025', service: 'Full Home Design', amount: 50000, status: 'Cleared' },
    { id: 'txn_4', date: 'Jul 25, 2025', service: 'Furniture Sourcing', amount: 8000, status: 'Cleared' },
];

const Earnings = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Earnings</h1>
                <p className="mt-1 text-gray-600">Track your revenue, manage payouts, and view transaction history.</p>
            </div>

            {/* Earnings Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg border p-6">
                    <p className="text-sm font-medium text-gray-500">Available for Payout</p>
                    <p className="mt-2 text-4xl font-extrabold text-blue-600">₹{earningsData.availableForPayout.toLocaleString()}</p>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <ArrowDownOnSquareIcon className="h-5 w-5"/>
                        Request Payout
                    </button>
                </div>
                 <div className="bg-white rounded-xl shadow-sm border p-6">
                    <p className="text-sm font-medium text-gray-500">Pending Clearance</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">₹{earningsData.pendingClearance.toLocaleString()}</p>
                     <p className="mt-1 text-xs text-gray-500">Funds clear 24h after job completion.</p>
                </div>
                 <div className="bg-white rounded-xl shadow-sm border p-6">
                    <p className="text-sm font-medium text-gray-500">Lifetime Earnings</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">₹{earningsData.lifetimeEarnings.toLocaleString()}</p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((txn) => (
                                <tr key={txn.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">{txn.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{txn.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{txn.service}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹{txn.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${
                                            txn.status === 'Cleared' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {txn.status === 'Cleared' ? <CheckCircleIcon className="h-3 w-3"/> : <ExclamationCircleIcon className="h-3 w-3"/>}
                                            {txn.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Earnings;