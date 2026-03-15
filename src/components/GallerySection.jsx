import React from "react";
import { useNavigate } from "react-router-dom";

import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";
import image26 from "../assets/image26.png";

function Feature({ title, subtitle, desc, img, reverse, link }) {

  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 py-24`}
    >

      {/* TEXT */}
      <div className="md:w-1/2 text-white space-y-6">

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
          <br />
          <span className="text-gray-400 text-2xl font-medium">
            {subtitle}
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
          {desc}
        </p>

        <button
          onClick={() => navigate(`/feature/${link}`)}
          className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-400 hover:scale-105 transition duration-300"
        >
          EXPLORE MORE
        </button>

      </div>

      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center overflow-hidden rounded-xl">

        <img
          src={img}
          alt={title}
          className="w-[450px] rounded-xl shadow-2xl hover:scale-110 transition duration-500"
        />

      </div>

    </div>
  );
}

function GallerySection() {

  return (
    <section className="bg-black px-10 md:px-20 py-20">

      {/* TITLE */}
      <div className="flex items-center mb-16">

        <h2 className="text-white text-4xl font-bold mr-6">
          TOP FEATURES
        </h2>

        <div className="flex-1 h-[3px] bg-green-500"></div>

      </div>

      {/* FEATURE 1 */}
      <Feature
        title="POWER"
        subtitle="NEXT LEVEL PERFORMANCE"
        desc="The Ninja 400 delivers incredible performance with a lightweight high power engine that provides both speed and control."
        img={image23}
        link="power"
      />

      <hr className="border-gray-800" />

      {/* FEATURE 2 */}
      <Feature
        title="HANDLING"
        subtitle="PRECISION CONTROL"
        desc="Engineered with a lightweight trellis frame that ensures smooth handling and confident cornering."
        img={image24}
        reverse
        link="handling"
      />

      <hr className="border-gray-800" />

      {/* FEATURE 3 */}
      <Feature
        title="ERGONOMICS"
        subtitle="RIDER COMFORT"
        desc="Comfortable riding posture designed to provide balance and comfort for both daily riding and long journeys."
        img={image25}
        link="ergonomics"
      />

      <hr className="border-gray-800" />

      {/* FEATURE 4 */}
      <Feature
        title="STYLING"
        subtitle="AGGRESSIVE DESIGN"
        desc="Inspired by Kawasaki supersport bikes, the Ninja 400 features sharp aerodynamic styling."
        img={image26}
        reverse
        link="styling"
      />

    </section>
  );
}

export default GallerySection;