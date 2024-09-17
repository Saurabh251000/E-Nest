'use client'
import React from 'react';
import Image from 'next/image';
import { Feedback } from '../types/interface'; 

interface FeedBackCardProps {
  data: Feedback;
}

const FeedBackCard: React.FC<FeedBackCardProps> = ({ data }) => {
  const rating = data.rate;
  const totalStars = 5;

  return (
    <div className='w-full bg-white p-4 sm:p-6 md:p-8 rounded-2xl space-y-4  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
      <div className='w-full flex justify-between'>
        <div className='relative  rounded-full mr-2 '>
          <Image
            src={data.profile}
            alt={`${data.name}'s profile`}
            // layout="fill"
            width={50}
            height={50}
            objectFit="cover"
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col items-start pl-2'>
          <div className='text-sm sm:text-base md:text-lg font-semibold text-purple-900'>{data.name}</div>
          <div className='flex flex-wrap  items-center mt-2'>
            <span className='inline-block text-sm md:text-base mr-1'>{data.rate}</span>
            <div className='flex flex-row items-center mr-1'>
              {[...Array(totalStars)].map((_, index) => (
              <svg
                key={index}
                className={`w-3 h-3 ${index < rating ? 'text-purple-600' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            </div>
            <div className='text-sm md:text-base  text-gray-500 overflow-hidden'>(4 Months ago)</div>
          </div>
        </div>
      </div>
      <div className='mt-4 text-sm sm:text-base md:text-lg text-gray-700'>
        {data.feedbackText}
      </div>
    </div>
  );
};

export default FeedBackCard;
