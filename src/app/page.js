import React from "react";

//img profile
import profileImg from "../../public/profile.jpg"

//Icons
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi"

//NextJs link
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (

    <>
      <main className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto w-full">

        <div className="bg-neutral-600 rounded-full">
          {/* */}
          <Image src={profileImg} alt="Profile Image" className="object-cover w-fit" width={3000} height={3000} />

        </div>
        <h1 className="font-RubikExtraBold text-6xl text-center my-9 btn-shine">
          Nicolas Fallabella
        </h1>

        <p className="text-neutra-400 lg:max-w-lg text-center font-RubikRegular">
          lorem asd as da a a das as  as  asd   sd sajdk sj sdjk sdj sjkd fjksd fsd
        </p>
      </main>

      <div className="flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href="/dashboard">
            <span>
              <PiHouseLight />
            </span>
          </Link>

          <span>
            <PiGithubLogoLight />
          </span>
        </div>

      </div>
    </>
  );
}
