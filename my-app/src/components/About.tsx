import React from 'react';
import { AboutText }  from '@/data'


const About = () => {
  return (
    <div className='bg-white p-10 rounded-[40px]'>
      <div className=' pt-6'>
        <h5 className='text-2xl md:text-3xl font-bold mb-[20px] text-purple-600'>About me</h5>
        <p className='text-base md:text-lg'>
          {AboutText}
        </p>
      </div>
    </div>
  );
};

export default About;