'use client'
import React , {useState} from "react";
import profile from "../../../../public/profile.jpg"
import {
    PiBookOpenTextLight,
    PiGoogleLogoThin,
    PiTwitterLogoLight,
    PiMagicWandThin,
    PiShapesThis,
    PiHouseLight
} from "react-icons/pi";
import { SiAdobe} from "react-icons/si"

import {motion ,useAnimation} from "framer-motion" 
import  Image  from "next/image";
import Link from "next/link";

const LeftPage = () => {
  const [ open ,setOpen ] = useState(false )
  const [ email , setEmail ] = useState( "" )
  let skills = [
    "ReactJs",
    "Git" ,
    "NodeJs",
    "Framer Motion",

  ]

  async function senndata( params ) {

  }
  return (
    <div className=" hidden md:block bg-[#1c1c1c] w-full md:w-80 h-fit sticky top-5">
        <div className="md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1c1c1c]">
            <div className="flex">

                <div>
                    <Image src={profile} alt="Profile"  className="w-28 h-28 rounded-full object-cover"/>
              

                <div onClick={()=> setOpen(!open)} className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 right-28 animate-pulse" />

                {
                    open && (
                        <div className="border border-lime-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[4.7rem] right-3"> 
                            <p className="text-[9px] font-RubikMedium text-lime-300">
                                Open to freelancing
                            </p>
                        </div>
                )}

                <h1 className="font-RubikExtraBold text-xl text-neutral-300 mt-3">
                    Nicolas Falabella
                </h1>      

                <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
                    nicolasgfalabella@gmail.com
                </p> 

                <p className="text-xs font-RubikMedium text-neutral-300 ml-1">
                    @nfalabella_
                </p>    

                <div className="flex w-full">
                    <div className="flex gap-x-1 text-xs my-4">                       

                        {skills.map((skill ,index ) => (
                         <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold" key={index}>
                           {skill}
                         </p> 
                        ))}
                       
                   </div>
             </div>

             <div>
                <div className="flex gap-x-1 w-full h-fit">
                    <Link href={"/"}>
                        <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                            <PiHouseLight className="text-neutral-100" />
                        </div>
                    </Link>

                    <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                          <PiBookOpenTextLight className="text-neutral-100" />
                     </div>

                </div>
             </div>
           </div>   
        </div>
        <form action="senddata" className="bg-[#282828] p-1 rounded-md md:flex items-center justify-between h-9 w-full hidden">
            <input  value={email} onChange={handleChange} className="w-36 focus:outline-none bg-transparent text-neutral-400 text-xs
            placeholver:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubiMedium" placeholder="nombre@email.com" type="text" />


         <motion.button 
        // animate={controls} 
         className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMeidum text-neutral-50">

         </motion.button>

        </form>
      </div>
    </div>  
  )
}

export default LeftPage
