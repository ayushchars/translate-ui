import React, { useEffect, useState } from 'react'
import Image from "next/image";
import axios from 'axios';

function HomePage() {
const [url, seturl] = useState("")
  const fetchData = async()=>{
    try{
      const res = await axios.get("https://communiq-translate.vercel.app/api/get-url")
      seturl(res?.data?.data?.name)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white text-center md:text-left relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <Image
              src="/assets/Logo.jpeg"
              alt="Communiq Logo"
              width={300}
              height={300}
              priority
              className="drop-shadow-2xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 max-w-lg mx-auto relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
            Welcome to <br className="hidden md:block" />
            <span className="text-blue-400">Communiq</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
            Revolutionizing communication with AI-powered language solutions
          </p>
          <a
            href={url}
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-blue-600"
          >
            <span className="drop-shadow-md">Download Communiq</span>
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
  )
}

export default HomePage