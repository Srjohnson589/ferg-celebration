import React from 'react';
import Image from "next/image";
import Background from "../../public/brickwall.jpeg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">

      {/* Button to Shoutout */}
      <div className="fixed right-0 top-0 rounded-lg text-[--primary-red] bg-[--neutral-apricot] border grid z-[100] m-8 lg:mb-0">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[--primary-red] hover:text-[--neutral-apricot] hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
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

      {/* Header */}
      <div className="z-10 w-full max-w-3xl font-mono text-4xl">
        <p className="flex w-full justify-center border-b border-[--olive] bg-[--neutral-sage] from-[--neutral-sage] backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:dark:bg-[--neutral-sage] lg:p-6">
          The Ferg Shoutout Wall
        </p>
      </div>

        {/* Feed */}
        <div className="relative flex place-items-center">
          <div className="border-2 w-96 h-72 text-center bg-[--neutral-apricot] p-16">My feed here</div>
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
