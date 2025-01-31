import React from 'react'

function Footer() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-gray-300 py-10 px-6 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Communiq
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Breaking language barriers with AI-powered translations & assistance.
        </p>
      </div>

      <div className="md:w-1/3 flex flex-col items-center md:items-end space-y-2">
        <h3 className="text-lg font-semibold text-purple-400">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Communiq. All rights reserved.</p>
      <p className="mt-2 text-sm text-gray-400">
      Made with <span>❤️</span> by Ayush Chaurasia
    </p>
    </div>
  </div>
  )
}

export default Footer