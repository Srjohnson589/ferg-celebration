"use client"

import React, { ReactHTMLElement } from 'react';
import { useState } from 'react';
import Image from "next/image";
import Background from "../../public/brickwall.jpeg";
import ShoutoutForm from "../components/ShoutoutForm";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);

  const handleClickShoutout = () => {
    setOpenForm(!openForm)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      {openForm && 
      <div className="absolute z-[999] top-0 w-full h-[100vh] bg-gray-900/90 flex justify-center">
        <ShoutoutForm handleClickShoutout={handleClickShoutout}/></div>}

      {/* Button to Shoutout */}
      <div className="fixed right-0 top-0 rounded-lg text-[--primary-red] bg-[--neutral-apricot] border grid z-[100] m-8 lg:mb-0">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[--primary-red] hover:text-[--neutral-apricot] hover:dark:border-neutral-700"
          rel="noopener noreferrer"
          onClick={handleClickShoutout}
        >
          <h2 className="text-2xl font-semibold">
            Give a Shoutout
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>

      {/* Background Image */}
      <Image
      src={Background}
      alt="brick background"
      className="w-full absolute top-0 z-[-1]"
      >
      </Image>

      {/* Feed */}
      <div className="z-10 w-full max-w-3xl font-mono lg:rounded-xl">
        <p className="text-4xl flex w-full justify-center border-b border-[--olive] bg-[--neutral-sage] from-[--neutral-sage] backdrop-blur-2xl lg:static lg:w-auto   lg:border lg:dark:bg-[--neutral-sage] lg:p-6">
          The Ferg Shoutout Wall
        </p>
        <ul className="border-2 text-center bg-[--neutral-apricot] p-6">
          <li className="flex justify-center border border-[--olive] p-6">
            <Image
              src=""
              alt=""
              className="w-32 h-32">
            </Image>
            <div className="flex flex-col justify-between w-1/2">
              <h6 className="font-bold mb-2 text-lg">[Name!!!!!!]</h6>
              <p className="">"No messages here yet!"</p>
              <p className="text-sm">from [name]</p>
            </div>
          </li>
        </ul> 
      </div>

        

        {/* Footer Credit */}
        <a
            className="fixed bottom-0 bg-[--primary-red] text-[--neutral-apricot] block w-full text-center lg:pointer-events-auto lg:p-1"
            href="https://sarah-fullstack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          Creative project of {" Sarah Johnson"}, not officially endorsed by The Ferg
          </a>
    </main>
  
  );
}
