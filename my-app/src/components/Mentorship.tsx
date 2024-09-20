'use client'
import React, {useEffect, useState} from 'react'
import MentorCard from './MentorCard'
// import { topMentorsData }  from '@/data'
import { TopMentor } from '../types/interface'


function Mentorship() {
  const [mentors, setMentors] = useState<TopMentor[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mentors', { credentials: 'include' });   // GET request to API
        const data = await response.json();
        // console.log("data",data);
        
        setMentors(data);  // Set mentors data from API
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className=''>
    <div className='text-center mb-8'>
      <h1 className='text-2xl md:text-3xl font-bold text-purple-600'>
        People also liked their Mentorship
      </h1>
    </div>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 items-center px-12 md:px-0'>
      {mentors.map((data, index) => (
        <MentorCard key={index} data={data} />
      ))}
    </div>
  </div>
  )
}

export default Mentorship