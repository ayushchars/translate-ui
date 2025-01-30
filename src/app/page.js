"use client";
import React, { useState } from "react";
import Image from "next/image";

function Page() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Seamless Messaging",
      description:
        "Communiq allows you to send messages instantly with end-to-end encryption, ensuring your conversations remain private and secure.",
      image: "/assets/Logo.jpeg",
    },
    {
      id: 2,
      title: "Group Chats",
      description:
        "Stay connected with family, friends, and colleagues through group chats that make collaboration easy and fun.",
        image: "/assets/Logo.jpeg",
    },
    {
      id: 3,
      title: "Secure Calls",
      description:
        "Experience high-quality voice and video calls with top-notch security, so you never have to worry about eavesdroppers.",
        image: "/assets/Logo.jpeg",
    },
    {
      id: 4,
      title: "Media Sharing",
      description:
        "Share photos, videos, and documents seamlessly without compromising on quality or speed.",
        image: "/assets/Logo.jpeg",
    },
    {
      id: 5,
      title: "Custom Profiles",
      description:
        "Personalize your profile with unique avatars, statuses, and themes to express yourself.",
        image: "/assets/Logo.jpeg",
    },
    {
      id: 6,
      title: "Custom Profiles",
      description:
        "Personalize your profile with unique avatars, statuses, and themes to express yourself.",
        image: "/assets/Logo.jpeg",
    },
  ];

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

      {/* How It Works Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-purple-400 drop-shadow-md mt-10">
          How <span className="text-blue-400">Communiq</span> Works
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mt-4">
          Explore the key features of Communiq and see how it enhances your communication experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-5xl">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-gray-800 rounded-lg p-4 shadow-lg cursor-pointer transition-all duration-300 ${
                selectedFeature === feature.id ? "h-[300px]" : "h-[250px]"
              }`}
              onClick={() =>
                setSelectedFeature(selectedFeature === feature.id ? null : feature.id)
              }
            >
              {selectedFeature === feature.id ? (
                <div className="flex flex-col justify-center items-center h-full p-4">
                  <h2 className="text-xl font-bold text-purple-400">{feature.title}</h2>
                  <p className="mt-2 text-gray-300 text-sm">{feature.description}</p>
                  <button
                    className="mt-4 px-3 py-1 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 transition-all duration-300"
                    onClick={() => setSelectedFeature(null)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-gray-300 font-semibold">{feature.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
