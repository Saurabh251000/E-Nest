'use client'
import React from 'react'
import Mentor from './mentor'
import Courses from './Courses'
import About from './About'
import Feedback from './Feedback'
import Mentorship from './Mentorship'
function Content() {
  return (
  
    <div className='w-full flex flex-col space-y-10 py-[50px] px-5 md:px-16 lg:px-[80px]  bg-[#F5F2F8] overflow-hidden' >
      <Mentor/>
      <Courses/>
      <About/>
      <Feedback/>
      <Mentorship/>
    </div>
  
    
  )
}

export default Content