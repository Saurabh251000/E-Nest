'use client'
import React from 'react';
import { MentorshipFeedback } from '../data'
import FeedBackCard from './FeedBackCard';

const Feedback = () => {
  return (
    <div className='px-4 py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600'>
          Impact of my Mentorship
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
        {MentorshipFeedback.map((data, index) => (
          <FeedBackCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
