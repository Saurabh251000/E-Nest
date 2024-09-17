'use client'
import React from 'react';
import Image from 'next/image';
import { mentorData } from '../data';

const Mentor = () => {
  const rating = Math.round(mentorData.rate);
  const totalStars = 5;

  return (
    <div className='bg-white p-8 rounded-2xl flex flex-col lg:flex-row justify-between'>
      <div className='space-y-4 lg:mr-36 mb-8 lg:mb-0'>
        <h6 className='text-purple-800 text-sm'>MENTOR</h6>
        <h3 className='text-2xl font-semibold'>{mentorData.name}</h3>
        <p className='text-lg'>{mentorData.about}</p>
        <div className='flex items-center'>
          <span className='inline-block mr-4'>{mentorData.rate * 1.0}</span>
          <div className='flex flex-row'>
            {[...Array(totalStars)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ms-1 ${index < rating ? 'text-purple-600' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className='space-y-6 mr-8'>
        <div className='flex justify-center'>
          <Image
            src='/icons/mentor.png'
            alt={`${mentorData.name} profile`}
            width={160}
            height={160}
            className='object-cover rounded-lg'
          />
        </div>
        <div className='flex space-x-4'>
          {mentorData.social.map((social, index) => (
            <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
              <Image
                src={social.icon}
                alt={`${social.name} icon`}
                width={40} 
                height={40} 
                className='object-contain sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
