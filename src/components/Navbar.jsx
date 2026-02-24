import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full h-15 flex items-center justify-between px-6 md:px-14 z-50 
      bg-gradient-to-r from-green-400 via-black to-green-600/50"
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Kawasaki Logo"
          className="h-20 w-32 cursor-pointer hover:scale-105 transition mt-6"
        />
      </Link>

      {/* Desktop Menu (UNCHANGED) */}
      <ul className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
        <li><Link to="/" className="hover:underline hover:decoration-red-500 hover:text-green-400 transition duration-300">Home</Link></li>
        <li><Link to="/community" className="hover:underline hover:decoration-red-500 hover:text-green-400 transition duration-300">Community</Link></li>
        <li><Link to="/events" className="hover:underline hover:decoration-red-500 hover:text-green-400 transition duration-300">Events</Link></li>
        <li><Link to="/gallery" className="hover:underline hover:decoration-red-500 hover:text-green-400 transition duration-300">Gallery</Link></li>
        <li><Link to="/contact" className="hover:underline hover:decoration-red-500 hover:text-green-400 transition duration-300">Contact</Link></li>
      </ul>

      {/* Desktop Button (UNCHANGED) */}
      <button className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 
        text-red-500 font-semibold px-6 py-2 rounded-full border-2 border-green-700 
        shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 
        transition-all duration-300">
        Join Now
      </button>

      {/* Hamburger / Close */}
      <button
        className="md:hidden text-green-400 text-3xl z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu with SLIDE animation */}
      <div
        className={`absolute top-full left-0 w-full bg-black md:hidden 
        transition-all duration-300 ease-in-out overflow-hidden
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-300 text-sm font-medium">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/community" onClick={() => setOpen(false)}>Community</Link></li>
          <li><Link to="/events" onClick={() => setOpen(false)}>Events</Link></li>
          <li><Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

          <button className="bg-gradient-to-r from-green-500 to-green-600 
            text-red-500 font-semibold px-6 py-2 rounded-full border-2 border-green-700">
            Join Now
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;