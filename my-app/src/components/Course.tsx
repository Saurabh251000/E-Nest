'use client'
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BookNow from './BookNow';

interface CourseProps {
  name: string;
  duration: number;
  price: number;
  discount: number;
  bookingPrice: number;
  color: string;
}

function Course({ name, duration, price, discount, bookingPrice, color }: CourseProps) {
  // console.log(color)
  return (
    <Card className={`bg-white rounded-[20px] py-5 col-span-1`}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Duration {duration} min</CardDescription>
      </CardHeader>
      <CardContent className='flex items-center space-x-2'>
        <span className='text-gray-500 line-through'>₹{price}</span> {/* Crossed original price */}
        <span className='text-green-600'>{discount}% off</span> 
      </CardContent>
      <CardFooter  className={` flex justify-between  ${color} mx-5 my-3 p-2 rounded-full`}>
        <BookNow bookingPrice={bookingPrice}/>
      </CardFooter>
    </Card>
  );
}

export default Course;
