import React from 'react'
import { Sheet, SheetContent, SheetTrigger  } from './ui/sheet'
import {AlignJustify} from 'lucide-react';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
            <div className='flex flex-col items-center justify-between gap-y-32'>
                <img src="/logo-no-background.svg" alt="" height={70} width={70}/>
                <Nav containerStyles={`flex flex-col gap-y-8`}
                    linkStyles={`text-2xl`}
                    underLineStyles=''
                />
            </div>
            <SocialIcons className=''/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
