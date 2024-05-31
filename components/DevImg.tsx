import Image from 'next/image'
import React from 'react'

const DevImg = ({containerStyles, imgSrc} : {containerStyles : string, imgSrc : string}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt=''/>
    </div>
  )
}

export default DevImg
