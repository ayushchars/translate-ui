"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";

function Index() {
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleSubmit =  async() => {
    
      try{
        const res = await axios.post(`https://communiq-translate.vercel.app/api/url`,{ "name" : inputValue})
        console.log(res)
        fetchData()
      }catch(err){
        console.log(err)
      }
  };


  const fetchData = async()=>{
    try{
      const res = await axios.get(`https://communiq-translate.vercel.app/api/get-url`)
      setCurrentUrl(res?.data?.data?.name)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-700 text-sm mb-2">Current Link:</p>
        <p className="text-blue-600 font-semibold break-all mb-4">{currentUrl}</p>

        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Index;
