"use client"
import React , {useState} from "react";
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
import {Link , Image }  from "next/link";

const LeftPage = () => {
    const [ open ,setOpen ] = useState(false )
    const [ email , setEmail ] = useState( "" )
    co
  return (
    <div className=" hidden md:block bg-[#1c1c1c] w-full md:w-80 h-fit sticky top-5">

        <div className="md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1c1c1c]">
            <div className="flex">

                <div>
                    < src={} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default LeftPage ;