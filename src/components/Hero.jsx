import React from 'react';
import bike from "../assets/bike.png"; 

function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center px-10 pt-20 md:pt-24">

      <div className="w-full md:w-1/2 text-black space-y-6 md:pr-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-center md:text-left tracking-wide md:tracking-wider">
          Ride with the <br className="md:hidden" />
          <span className="text-green-500">Kawasaki</span> Community
        </h1>

        <p className="text-gray-700 max-w-md text-lg text-center md:text-left">
          Connect with passionate riders, discover exclusive events, and become
          part of the official Kawasaki riders community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition">
            Join Community
          </button>

          <button className="border border-gray-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition">
            Explore Events
          </button>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={bike}
          alt="Kawasaki Bike"
          className="w-[500px] md:w-[520px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)]"
        />
      </div>

    </section>
  );
}

export default Hero;
