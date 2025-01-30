"use client";
import React from "react";
import Image from "next/image";

function Page() {
  return (
    <>
    
    <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white text-center md:text-left">
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <Image 
          src="/assets/Logo.jpeg"
          alt="Communiq Logo" 
          width={250}
          height={250} 
          priority
          className="drop-shadow-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6 max-w-lg mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-purple-400 drop-shadow-md">
          Welcome to <span className="text-blue-400">Communiq</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Download the Communiq app and stay connected like never before.
        </p>
        <a
          href="/download"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-400 transition-all duration-300 ring-2 ring-purple-300 hover:ring-purple-500"
        >
          Download Now
        </a>
      </div>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white text-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-purple-400 drop-shadow-md mt-10">
        How <span className="text-blue-400">Communiq</span> Works
      </h1>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mt-4">
        Explore the key features of Communiq and see how it enhances your communication experience.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-5xl">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <Image src="/assets/feature1.jpeg" alt="Feature 1" width={300} height={200} className="rounded-lg" />
          <p className="mt-2 text-gray-300">Feature 1: Seamless Messaging</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <Image src="/assets/feature2.jpeg" alt="Feature 2" width={300} height={200} className="rounded-lg" />
          <p className="mt-2 text-gray-300">Feature 2: Group Chats</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <Image src="/assets/feature3.jpeg" alt="Feature 3" width={300} height={200} className="rounded-lg" />
          <p className="mt-2 text-gray-300">Feature 3: Secure Calls</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <Image src="/assets/feature4.jpeg" alt="Feature 4" width={300} height={200} className="rounded-lg" />
          <p className="mt-2 text-gray-300">Feature 4: Media Sharing</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <Image src="/assets/feature5.jpeg" alt="Feature 5" width={300} height={200} className="rounded-lg" />
          <p className="mt-2 text-gray-300">Feature 5: Custom Profiles</p>
        </div>
      </div>
      
      <a
        href="/download"
        className="mt-8 inline-block bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-400 transition-all duration-300 ring-2 ring-purple-300 hover:ring-purple-500"
      >
        Get Started
      </a>
    </div>
    </>
  );
}

export default Page;
