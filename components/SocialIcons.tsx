import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { RiLinkedinFill} from 'react-icons/ri'

const SocialIcons = ({className}: {
    className: string
}) => {
  return (
    <div className={`flex items-center justify-center gap-x-16 cursor-pointer ${className}`}>
      <a href="https://github.com/RizWaaN3024" target='_blank'><FiGithub size={30}/></a>
      <a href="https://www.linkedin.com/in/rizwaan-ansari-986374196/" target='_blank'><RiLinkedinFill size={35}/></a>
      <a href="mailto:rizwaanans786@gmail.com"><CiMail size={35}/></a>
    </div>
  )
}

export default SocialIcons
