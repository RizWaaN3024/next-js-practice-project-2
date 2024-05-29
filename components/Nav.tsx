"use client";
import { navigation } from "@/data";
import React, { useState } from "react";
import {enablePageScroll, disablePageScroll} from 'scroll-lock';
import { usePathname } from "next/navigation";
import Link from "next/link";
import {motion} from 'framer-motion';

const Nav = ({containerStyles, linkStyles, underLineStyles}: {
  containerStyles: string,
  linkStyles: string,
  underLineStyles: string
}) => {
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

  const path = usePathname();
  console.log(path);
  console.log(toggle);
  return (
    <nav className={`${containerStyles}`}>
      {navigation.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.id}
            className={`capitalize ${linkStyles}`}
          >
            {item.path === path && (
              <motion.span 
                initial={{y: '-100%'}}
                animate={{y: 0}}
                transition={{type: 'tween'}}
                layoutId='underline'
                className={`${underLineStyles}`}

              />
            )}
            {item.title}
          </Link>
        )
      })}

    </nav>
  );
};

export default Nav;
