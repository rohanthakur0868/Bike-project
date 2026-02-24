import React from "react";

import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";
import image26 from "../assets/image26.png";

function Feature({ title, subtitle, desc, btn, img, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 py-20`}
    >
      
      <div className="md:w-1/2 text-white space-y-6">
        <h2 className="text-4xl font-extrabold leading-tight">
          {title}
          <br />
          <span className="text-gray-400 text-2xl font-medium">
            {subtitle}
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
          {desc}
        </p>

        <button className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition">
          {btn}
        </button>
      </div>

    
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt={title}
          className="rounded-xl shadow-2xl w-[420px] hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}

function GallerySection() {
  return (
    
    <section className="bg-black px-10 md:px-20">
        <div className="flex items-center mt-0 mb-8">
        <h2 className="text-white text-3xl font-bold mr-6">TOP FEATURES</h2>
        <div className="flex-1 h-1 bg-green-500"></div>
      </div>
      <Feature
        title="POWER"
        subtitle="NEXT-LEVEL POWER"
        desc="The Ninja® 400 motorcycle engine delivers the perfect balance of high-performance thrills and easy-to-use power."
        btn="EXPLORE MORE"
        img={image23}
      />

      <hr className="border-gray-700" />

      <Feature
        title="HANDLING"
        subtitle="NIMBLE & AGILE"
        desc="The Ninja® 400 motorcycle’s chassis dimensions were designed to deliver confident handling with a modern sporty feel at all speeds"
        btn="EXPLORE MORE"
        img={image24}
        reverse
      />

      <hr className="border-gray-700" />

      <Feature
        title="ERGONOMICS"
        subtitle="DESIGNED FOR COMFORT"
        desc="A sporty yet relaxed riding position accommodates a wide variety of riders and riding situations."
        btn="EXPLORE MORE"
        img={image25}
      />

      <hr className="border-gray-700" />

      <Feature
        title="STYLING"
        subtitle="SHARP & MODERN"
        desc="Aggressive Ninja® styling boasts high-class modern design with superb fit and finish inspired by the larger displacement Ninja supersport bikes"
        btn="EXPLORE MORE"
        img={image26}
        reverse
      />
    </section>
  );
}

export default GallerySection;
