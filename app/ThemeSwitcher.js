"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from 'next/image';


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    
    return (
        <>
        {
            isDark ? (
                <div className='nightCircle'></div>
            ) : (
                <div className='dayCircle'></div>
            )
        }
        <nav className="flex fixed top-0 items-center justify-between w-full h-1/6">
        <div className="flex items-center ml-6 px-4">
        
          {
            isDark ? (
                <Image className='mr-5' src="/logo.svg" alt="logo" width={44} height={42} />
            ) : (
                <Image className='mr-5' src="/logo-light.svg" alt="logo" width={44} height={42} />    
            )             
          }
          <h1 className="text-2xl font-bold">blockflow</h1>
        </div>
        <div className="flex items-center justify-between w-1/3 mr-6">
          <a href="#" className="text-lg font-bold ">
            DOCS
          </a>
          <a href="#" className="text-lg font-bold">
            BLOG
          </a>
          <a href="#" className="text-lg font-bold">
            PRICING
          </a>
          <a href="#" className="text-lg font-bold">
            CONTACT US
          </a>
          <a className="cursor-pointer">
        {
            isDark ? (
              <Image className="border border-black" onClick={() => (
                setIsDark(false),
                setTheme('light')
              )} src="/sun-regular.svg" alt="sun" width={30} height={30} />
            ) : (
              <Image className="border border-black" onClick={() => (
                setIsDark(true),
                setTheme('dark')
              )}  src="/ic_round-dark-mode.svg" alt="moon" width={30} height={30} />
            )
          }  
       </a>
        </div>
        </nav>
        </>
    );
};

export default ThemeSwitcher;