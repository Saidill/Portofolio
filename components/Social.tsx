import { icons } from "lucide-react"
import Link from "next/link"
import path from "path"
import {FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa"

const socials = [
      {icon: <FaGithub/>, path:"https://github.com/saidil25"},
      {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/saidil-halim-4168122b6/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index) => {
            return(
                  <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                  </Link>
            )
      })}
    </div>
  )
}

export default Social