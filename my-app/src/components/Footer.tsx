'use client';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-12 lg:px-17 lg:py-16">
        {/* First Column */}
        <div className="md:col-span-1">
          <div className="text-center md:text-left flex flex-col items-center md:items-start mb-8 md:mb-4">
            <Image src='/icons/enest.png' alt="Logo" width={220} height={44} className="mr-2" />
            <span className='my-4 text-center md:text-left text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </span>
          </div>
          <div className="flex flex-col items-center mb-8 mt-4 md:mb-4 sm:items-start">
            <h3 className="text-lg font-semibold">Contact with us</h3>
            <a href="#" className='text-sm my-2 text-gray-600 hover:text-blue-600'>Email</a>
            <a href="#" className='text-sm text-gray-600 hover:text-blue-600'>Talk to a Councellor </a>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col  items-start pl-8">
          <h3 className="text-lg font-semibold mb-6 ">Brand and Security</h3>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li><a href="#" className=" hover:text-blue-600">Report Concern</a></li>
            <li><a href="#" className=" hover:text-blue-600">Report Security Issue</a></li>
            <li><a href="#" className=" hover:text-blue-600">Trademark Notice</a></li>
            <li><a href="#" className=" hover:text-blue-600">Advertise with us</a></li>
            <li><a href="#" className=" hover:text-blue-600">Help & Support</a></li>
          </ul>
        </div>
        <div className="md:col-span-1 flex flex-col items-start pl-8">
        <h3 className="text-lg font-semibold mb-6 items-center">Company</h3>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Policies</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="md:col-span-1 flex flex-col justify-between items-start pl-8">
          <div className="mb-8 md:mb-4">
            <h3 className="text-lg font-semibold mb-4">Incubated by</h3>
            <Image src='/icons/msme.png' alt="Government MSME" width={147} height={64} className="mt-3" />
            <Image src='/icons/IIMA.png' alt="IITMA" width={154} height={76} className="mt-5" />
          </div>
        </div>
      </div>
    

      <div className='flex flex-col gap-y-9  sm:flex-row justify-between px-8 pb-8 md:px-14 lg:px-18'>
        <div className="">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Let&apos;s get social:</h3>
            <div className='flex gap-x-2 mt-5'>
              <Image src='/icons/insta.png' alt="insta" width={25} height={25} className="" />
              <Image src='/icons/yt.png' alt="insta" width={25} height={25} className="" />
              <Image src='/icons/fb.png' alt="insta" width={25} height={25} className="" />
              <Image src='/icons/tele.png' alt="insta" width={25} height={25} className="" />
              <Image src='/icons/x.png' alt="insta" width={25} height={25} className="" />
              <Image src='/icons/linkdin.png' alt="insta" width={25} height={25} className="" />
            </div>
        </div>
        <div className="flex space-x-4 items-center ">
            <a href="#">
              <Image src='/icons/playstore.png' alt="Google Play" width={275} height={79} className="w-30 sm:w-36 md:w-48 lg:w-[275px] h-auto"  />
            </a>
            <a href="#">
              <Image src='/icons/appstore.png' alt="App Store" width={275} height={79} className="w-30 sm:w-36 md:w-48 lg:w-[275px] h-auto"  />
            </a>
        </div>
      </div>

      <div className='w-full text-center p-2 bg-purple-900 text-white'>
        {`Copyright \u00A9 AgriVision4U Pvt. Ltd. 2024`}
      </div>
    </footer>
  );
};

export default Footer;
