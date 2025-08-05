import React from 'react';
import { StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

// Placeholder Data
const reviewData = {
    averageRating: 4.89,
    totalReviews: 256,
    ratingDistribution: [
        { stars: 5, count: 210 },
        { stars: 4, count: 40 },
        { stars: 3, count: 2 },
        { stars: 2, count: 1 },
        { stars: 1, count: 3 },
    ],
    reviews: [
        { id: 1, customer: 'Priya Sharma', date: 'Aug 1, 2025', rating: 5, text: "Elena is a magician! She completely understood my vision and turned my cluttered apartment into a place of peace and beauty. Her attention to detail is unmatched. Worth every rupee!", service: 'Full Home Interior Design' },
        { id: 2, customer: 'Rohan Kumar', date: 'Jul 22, 2025', rating: 5, text: "Professional, punctual, and incredibly talented. The design consultation was eye-opening. I implemented her suggestions and my living room feels twice as big. Highly recommend.", service: 'Design Consultation' },
        { id: 3, customer: 'Sunita Devi', date: 'Jul 15, 2025', rating: 4, text: "Very happy with the final result. There were some minor delays, but the quality of the work was excellent. Would hire again.", service: 'Single Room Makeover' },
    ]
};

const Reviews = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">My Reviews</h1>
                <p className="mt-1 text-gray-600">See what your customers are saying about your services.</p>
            </div>

            {/* Overall Rating Summary */}
            <div className="bg-white rounded-xl shadow-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Rating</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r pb-6 md:pb-0">
                        <p className="text-6xl font-extrabold text-gray-900">{reviewData.averageRating}</p>
                        <div className="flex text-yellow-400 mt-1">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-6 w-6 ${i < Math.round(reviewData.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} />)}
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Based on {reviewData.totalReviews} reviews</p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="space-y-1">
                            {reviewData.ratingDistribution.map(item => (
                                <div key={item.stars} className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">{item.stars} star</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(item.count / reviewData.totalReviews) * 100}%` }}></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Individual Reviews List */}
            <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Latest Reviews</h3>
                </div>
                <ul className="divide-y divide-gray-200">
                    {reviewData.reviews.map(review => (
                        <li key={review.id} className="p-6 hover:bg-slate-50">
                             <div className="flex items-start space-x-4">
                                <div>
                                    <p className="font-semibold text-gray-900">{review.customer}</p>
                                    <p className="text-xs text-gray-500">Reviewed on {review.date} for <span className="font-medium text-gray-700">"{review.service}"</span></p>
                                </div>
                                <div className="flex-shrink-0 ml-auto flex items-center">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />)}
                                </div>
                            </div>
                            <p className="mt-3 text-gray-700 text-sm leading-6">{review.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Reviews;