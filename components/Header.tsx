"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import ThemeToggler from './ThemeToggler';
import { useTheme } from 'next-themes';
import MobileNav from './MobileNav';

const Header = () => {
    const {theme, setTheme} = useTheme();
    const [header, setHeader] = useState(false);
    const path = usePathname();
    
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        }

       window.addEventListener('scroll', handleScroll);


        return ()=> window.removeEventListener('scroll', handleScroll);
    })
  return (
    <header className={`${header ? 'py-4 bg-primary shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky z-30 top-0 transition-all dark:bg-none bg-secondary-foreground`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <Link href={"/"}>
                    <img src="/logo-no-background.svg" width={40} height={40} alt="" /> 
            </Link>
            <div>
                <Nav 
                    containerStyles={`hidden xl:flex gap-x-14 item-center`}
                    linkStyles={`relative hover:text-purple-300 text-white transition-all text-bold`}
                    underLineStyles={`absolute left-0 top-full h-[2px] bg-white w-full`}
                />
            </div>
            <div className='flex items-center gap-x-5'>
            <ThemeToggler />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
            </div>
            
        </div>
      </div>
    </header>
  )
}

export default Header
