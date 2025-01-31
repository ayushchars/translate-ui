"use client";
import React from "react";
import Image from "next/image";

function Page() {
  const features = [
    {
      id: 1,
      title: "Communiq",
      description:
        "Communiq is a powerful language translation tool that enables users to effortlessly translate keywords into any language across the globe. Whether you need to communicate across cultures, understand foreign text, or expand your reach internationally, Communiq ensures seamless and accurate translations in an instant.",
      image: "/assets/one.jpeg",
    },
    {
      id: 2,
      title: "Translate word",
      description:
        "Translate Word is a key feature of Communiq that allows users to effortlessly translate individual words into any language. Whether you're learning a new language, enhancing communication, or simply looking for the perfect translation, this feature provides accurate and instant word translations to help bridge language barriers seamlessly.",
      image: "/assets/two.jpeg",
    },
    {
      id: 3,
      title: "History",
      description:
        "History is a valuable feature of Communiq that keeps track of all your past translations, allowing you to easily revisit and review previously translated keywords and words. Whether you need to reference past searches, save important translations for later, or maintain a record of your language learning journey, the History feature ensures quick access to your translation history whenever you need it.",
      image: "/assets/three.jpeg",
    },
    {
      id: 4,
      title: "Email Assistence",
      description:
        "Email Assistant is a powerful feature of Communiq that helps users compose professional emails in English and seamlessly translate them into any language. Whether you're communicating with international clients, colleagues, or friends, this feature ensures that your messages are clear, accurate, and culturally appropriate. With just a few clicks, you can draft, translate, and send emails with confidence, breaking language barriers effortlessly.",
      image: "/assets/four.jpeg",
    },
    {
      id: 5,
      title: "WordFlip",
      description:
        "WordFlip is an intuitive feature of Communiq designed to help users understand the different components of a word, such as its verb, object, tense, or part of speech. Whether you're exploring grammar, learning a new language, or analyzing sentence structure, WordFlip allows you to break down words and discover their various forms and uses. This feature provides deeper insights into language, helping users master not just vocabulary, but the rules and nuances of sentence construction as well.",
      image: "/assets/five.jpeg",
    },
    {
      id: 6,
      title: "Chat With Communiq",
      description:
        "Chat With Communiq is an interactive feature that enables users to engage in real-time conversations with Communiq’s AI-powered assistant. Whether you need help with translations, grammar, language learning, or simply have a question, this feature offers an easy and conversational way to access language support. Chat With Communiq is designed to provide personalized assistance, offering instant answers and solutions to make your language experience smoother and more efficient.",
      image: "/assets/six.jpeg",
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

      <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-purple-400 drop-shadow-md mt-10">
          How <span className="text-blue-400">Communiq</span> Works
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mt-4">
          Explore the key features of Communiq and see how it enhances your communication experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-5xl">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 overflow-hidden flex flex-col items-center justify-center h-[450px] relative"
            >
              <div className="w-full flex justify-center items-center h-[400px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={225}
                  height={400}
                  className="rounded-lg aspect-[9/16] object-contain"
                />
              </div>
              <p className="mt-3 text-lg font-semibold text-gray-300">{feature.title}</p>

              <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-bold text-purple-400">{feature.title}</h2>
                <p className="mt-3 text-gray-300 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
