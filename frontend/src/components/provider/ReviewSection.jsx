import React from 'react';
import { StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

// Placeholder review data
const reviews = [
  {
    id: 1,
    author: 'Priya S.',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
    rating: 5,
    date: 'August 1, 2025',
    text: "Elena is a magician! She completely understood my vision and turned my cluttered apartment into a place of peace and beauty. Her attention to detail is unmatched. Worth every rupee!",
  },
  {
    id: 2,
    author: 'Rohan M.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    rating: 5,
    date: 'July 22, 2025',
    text: "Professional, punctual, and incredibly talented. The design consultation was eye-opening. I implemented her suggestions and my living room feels twice as big. Highly recommend.",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border">
      <div className="flex items-center gap-3 mb-6">
        <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
      </div>

      {/* Review Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-gray-200 pb-6 mb-6">
        <div className="text-center">
          <p className="text-5xl font-extrabold text-gray-900">4.9</p>
          <p className="text-sm text-gray-500">out of 5</p>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-8 w-8 ${i < 4 ? 'text-yellow-400' : i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} />)}
        </div>
        <p className="text-center sm:text-left text-lg text-gray-600 sm:ml-4">Based on <strong>84 reviews</strong></p>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col sm:flex-row items-start gap-4">
            <img className="h-12 w-12 rounded-full object-cover" src={review.avatarUrl} alt={review.author} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-gray-700">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-500">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;