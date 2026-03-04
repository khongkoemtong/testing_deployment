import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200">
              <div className="text-2xl font-bold text-indigo-600">NexusAI</div>
              <div className="hidden md:flex space-x-8 font-medium">
                <Link to='/about'><a href="#" className="hover:text-indigo-600 transition">About</a></Link>
                <a href="#" className="hover:text-indigo-600 transition">Service</a>
                <a href="#" className="hover:text-indigo-600 transition">Pricing</a>
              </div>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Login
              </button>
            </nav>
    </div>
  )
}

export default Navbar
