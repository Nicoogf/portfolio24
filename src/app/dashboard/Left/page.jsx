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

const LeftPage = () => {
  const [ open ,setOpen ] = useState(false )
  const [ email , setEmail ] = useState( "" )
  return (
    <div className=" hidden md:block bg-[#1c1c1c] w-full md:w-80 h-fit sticky top-5">
        <div className="md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1c1c1c]">
            <div className="flex flex-col">

                <div>
                    <Image src={profile} alt="Profile"  className="w-28 h-28 rounded-full object-cover"/>
                </div>

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

        </div>
      </div>
    </div>  
  )
}

export default LeftPage
