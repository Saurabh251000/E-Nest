'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink 
} from './ui/navigation-menu';
import { GraduationCap, NotepadText, Users, Brain, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white px-4 py-3 md:px-8 lg:px-12 xl:px-24 shadow-md">
      <div className='w-full flex flex-col sm:flex-row sm:justify-between items-center'>
        {/* Logo */}
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

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu for MD and above */}
        <NavigationMenu className={`${menuOpen ? 'block' : 'hidden'} w-full relative md:w-auto md:flex flex-col md:flex-row md:items-center`}>
          <NavigationMenuList className="relative w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <NavigationMenuItem >
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <GraduationCap />
                  Program
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <NotepadText />
                  Test Series
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className=" block sm:hidden md:block">
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <Brain />
                  Skill Connect
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Expert Connect Shift to "More" on md screens */}
            <NavigationMenuItem className=" block md:hidden lg:block">
              <NavigationMenuLink asChild>
                <a href="#" className="flex items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                  <Users />
                  Expert Connect
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* "More" with Expert Connect for md screens */}
            <NavigationMenuItem className="relative block ">
              <NavigationMenuTrigger>
                <span className="text-gray-800 hover:text-blue-500 transition duration-300 cursor-pointer">
                  More
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className='absolute hidden  sm:flex  sm:flex-col p-6 lg:hidden md:min-w-60'>
                <NavigationMenuLink asChild className=''>
                  <a href="#" className="flex flex-row items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                    <Users />
                    Expert Connect
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className='hidden sm:block md:hidden'>
                  <a href="#" className="flex flex-row items-center gap-x-2 text-base text-gray-800 hover:text-blue-500 transition duration-300">
                    <Brain />
                    Skill Connect
                  </a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Icon */}
        <div className="md:flex items-center">
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
