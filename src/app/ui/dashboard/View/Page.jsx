import React from 'react' ;
import { PiGithubLogoLight } from 'react-icons/pi';
import {SiCss3 , SiFramer} from "react-icons/si" ;

import{ motion , useAnimation } from "framer-motion" ;

const Page = () => {


  return (
    <div initial = {{ y:10 , opacity:0}}
        animate = {{
          y:0,
          opacity : 1,
          transition : {
            duration : 0.5,
            delay:0.9,
            type : "spring",
            stiffness : 200
          }
        }}
        className='bg-block w-full lg:w-fit hidden max-xl:hidden'>
        <div className='md:w-60 w-full rounded-2xl h-fit sticky top-5'>
          <div className='bg-[#1c1c1c] rounded-2xl p-4 border-neutral-800 text-neutral-200'>
            +90 Framer
          </div>
          
        </div>
    </div>
  )
}

export default Page