import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black via-neutral-900 to-black text-gray-300 px-10 md:px-20 pt-20 pb-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide mb-4">
            KAWASAKI
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Ride the future with Kawasaki. Join our global community of riders,
            innovators, and speed lovers.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-green-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-green-500 hover:text-black transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-green-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-green-500 hover:text-black transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-5">Explore</h2>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link to="/community" className="hover:text-green-500 transition">Community</Link></li>
            <li><Link to="/gallery" className="hover:text-green-500 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-green-500 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-5">Community</h2>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-green-500 cursor-pointer transition">Rider Stories</li>
            <li className="hover:text-green-500 cursor-pointer transition">Meetups</li>
            <li className="hover:text-green-500 cursor-pointer transition">Support</li>
            <li className="hover:text-green-500 cursor-pointer transition">Careers</li>
          </ul>
        </div>

      </div>
      <div className="w-full h-px bg-gray-800 mb-6"></div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2026 Kawasaki Community. All rights reserved.</p>
        <p className="text-xs">
          Designed with <span className="text-green-500">passion</span> for riders
        </p>
      </div>

    </footer>
  );
}

export default Footer;
