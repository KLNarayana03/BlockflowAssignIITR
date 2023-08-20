"use client";
import "./globals.css";
import Image from 'next/image'
import ThemeSwitcher from "./ThemeSwitcher";


export default function Home() {
 
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='mt-20'>
        <div className='flex flex-row justify-between'>
         <div className='flex flex-col justify-between'>
          <h1 className='font-neue-montreal text-7xl font-medium leading-21 tracking-wider text-left'>ELEVATE YOUR <br/> DAPP DEVELOPMENT <br/> WITH BLOCKFLOW</h1>
          <p className='font-lato text-2xl font-normal leading-6 tracking-normal text-left'>Efficient API Creation for Your<br/> Blockchain Data Needs.</p>
         </div>
         <Image className='ml-20' src="/main.svg" alt="hero" width={390.27} height={309} />
        </div>
        <button className='bg-purple-500 drop-shadow-custom hover:bg-gray-700 font-bold py-4 px-8 rounded-full mt-20' >REQUEST DEMO</button>
        </div>
    </main>
  )
}
