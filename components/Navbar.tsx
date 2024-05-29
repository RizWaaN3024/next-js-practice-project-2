"use client";
import { navigation } from "@/data";
import React, { useEffect, useState } from "react";
import MagicButton from "./ui/MagicButton";
import {enablePageScroll, disablePageScroll} from 'scroll-lock';
import { RiCloseLine } from "react-icons/ri";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {motion} from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState(false);
  const handleToggle = () => {
    if (toggle) {
        setToggle(false);
        enablePageScroll();
    } else {
        setToggle(true);
        disablePageScroll();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })
  const path = usePathname();
  console.log(path);
  console.log(toggle);
  return (
    <div className={` transition-all top-0 z-30 w-full md:p-3 p-5  flex items-center justify-between ${header ? 'py-4 bg-white shadow-lg dark:bg-accent': 'py-6 dark:bg-transparent'}`}>
      <img src="/logo-no-background.svg" alt="my-logo" width={44} height={44} />
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="flex items-center justify-between gap-20 text-xl">
          {navigation.map((item) => (
            <Link 
              href={item.path}
              key={item.id}
              className={`capitalize`}
            >
              {item.path === path && (
                <motion.span 
                  initial={{y: '-100%'}}
                  animate={{y: 0}}
                  transition={{type: 'tween'}}
                  className="relative hover:text-primary transition-all"
                />
              )}
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
      <ThemeToggler />
      
      
      {toggle ? 
         <RiCloseLine className="text-4xl md:hidden" onClick={handleToggle} />: <div className="flex flex-col gap-1.5 md:hidden" onClick={handleToggle}>
         <div className="w-7 bg-white border h-0.8"></div>
         <div className="w-7 bg-white border h-0.8"></div>
         <div className="w-7 bg-white border h-0.8"></div>
       </div>
    }
      
      {/* Mobile Navigation */}
      {toggle && (
        <div className={`md:hidden fixed inset-0 w-full top-20 transition-transform duration-500 ${
          toggle ? "translate-y-0" : "-translate-y-full"
        }`} style={{backgroundColor: '#010831'}}>
          <div>
            <ul className="flex flex-col items-center justify-between gap-5 text-xl font-semibold">
              {navigation.map((item) => (
                <a href="" key={item.id} className="border-t-2 w-full flex items-center justify-center"
                style={{ borderColor: 'rgb(3, 11, 37)' }}
                >
                  <li className="py-4">{item.title}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex item-center justify-center mt-5">
             <MagicButton title="Resume" otherClasses="cursor-pointer text-3xl px-30" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
