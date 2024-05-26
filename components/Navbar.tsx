import { navigation } from '@/data'
import React from 'react'
import MagicButton from './ui/MagicButton'


const Navbar = () => {
  return (
    <div className='w-full p-3 flex items-center justify-between'>
        <img src="/logo-no-background.svg" alt="my-logo" width={44} height={44}/>
        <div className='flex'>
            <ul className='flex items-center justify-between gap-10 text-l'>
               {navigation.map((item) => (
                <a href="" key={item.id}>
                    <li>{item.title}</li>
                </a>
               ))} 
            </ul>
        </div>
        <div>
            <MagicButton 
                title="Resume"
                otherClasses='cursor-pointer px-8'
            />
        </div>
    </div>
  )
}

export default Navbar
