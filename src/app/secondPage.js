import React from 'react'
import Image from "next/image";

function SecondPage() {
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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative py-8">
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
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SecondPage