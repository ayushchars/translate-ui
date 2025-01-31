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
      image: "/assets/Logo.jpeg",
    },
    {
      id: 2,
      title: "Translate Word",
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
      title: "Email Assistance",
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
            href="https://drive.google.com/uc?export=download&confirm=yes&id=1FB12aW3bub7hrHhsc6q0rgf6rXYcJdWb
"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-blue-600"
          >
            <span className="drop-shadow-md">Download Communiq</span>
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md mb-6">
              AI-Powered Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Discover the future of communication with our intelligent features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500"
              >
               
                <div className="relative h-60 w-full rounded-xl overflow-hidden bg-gray-900/50">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="object-contain p-4 transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                </div>
                
               
                <div className="mt-6 px-2 pb-2">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3 flex items-center">
                    {feature.title}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all">
                    {feature.description}
                  </p>
                </div>

                {/* AI Badge */}
                {/* <div className="absolute top-4 right-4 bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-300">
                  AI-Powered
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Page;