'use client'
import React from 'react'
import Course from './Course'
import { coursesData } from '../data'

function Courses() {
  return (
    <div className='relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-3xl gap-x-9 gap-y-9'>
      {coursesData.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          duration={course.duration}
          price={course.price}
          discount={course.discount}
          bookingPrice={course.bookingPrice}
          color={course.color}
        />
      ))}
    </div>
  )
}

export default Courses
