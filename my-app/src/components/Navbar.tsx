'use client';
import React from 'react';
import Image from 'next/image';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink 
} from './ui/navigation-menu';
import { GraduationCap, NotepadText, Users, Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white px-4 py-3 md:px-8 lg:px-12 xl:px-24 shadow-md">
      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/icons/logo.png" 
            alt="E-NEST Logo"
            width={40} 
            height={40} 
            priority={true} 
          />
          <span className="font-bold text-xl text-violet-800 ml-2">E-NEST</span>
        </div>

        <NavigationMenu className="w-full md:w-auto flex flex-col md:flex-row md:items-center">
          <NavigationMenuList className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <GraduationCap/>
                  Program
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <NotepadText/>
                  Test Series
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <Brain/>
                  Skill Connect
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <Users/>
                  Expert Connect
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="text-gray-800 hover:text-blue-500 transition duration-300 cursor-pointer">
                  More
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <span>... Coming Soon ...</span>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center">
          <Image
            src="/icons/userlogo.png" 
            alt="User Icon"
            width={44} 
            height={44} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
