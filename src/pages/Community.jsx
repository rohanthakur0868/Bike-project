import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import ImageSection from "../components/ImageSection.jsx";
import BikeCategories from "../components/BikeCategories";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";

function Community() {
  return (
    <>
      <Hero />
      <BikeCategories />

      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="flex items-center mb-12">
          <h2 className="text-black text-3xl font-bold mr-6">
            OFFERS & PROMOTIONS
          </h2>
          <div className="flex-1 h-1 bg-green-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle1}
                alt="Ninja ZX-10R"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Ninja ZX-10R</h1>
            <p className="text-gray-700 max-w-md text-lg">
              A race-focused superbike with aggressive styling, advanced electronics,
              and thrilling performance built for speed lovers.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle2}
                alt="Z H2"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Z H2</h1>
            <p className="text-gray-700 max-w-md text-lg">
              A supercharged naked bike delivering raw power, street dominance,
              and bold Kawasaki design.
            </p>
          </div>
          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle3}
                alt="Ninja 400"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Ninja 400</h1>
            <p className="text-gray-700 max-w-md text-lg">
              Lightweight, agile, and sporty — perfect for city rides and
              weekend adventures.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle4}
                alt="Versys 650"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Versys 650</h1>
            <p className="text-gray-700 max-w-md text-lg">
              A comfortable adventure-tourer designed for long journeys,
              stability, and all-day riding comfort.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle5}
                alt="Z650"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Z650</h1>
            <p className="text-gray-700 max-w-md text-lg">
              A stylish middleweight naked bike offering smooth power,
              control, and everyday ride comfort.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle6}
                alt="Ninja H2"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">Ninja H2</h1>
            <p className="text-gray-700 max-w-md text-lg">
              A hyperbike with supercharged performance, futuristic design,
              and unmatched Kawasaki engineering.
            </p>
          </div>

        </div>

        <div className="w-full flex justify-center mt-20">
          <button className="px-16 py-4 bg-black text-white rounded-full border-2 border-green-500 font-semibold tracking-wide hover:bg-green-500 hover:text-black transition duration-300">
            VIEW ALL FEATURED VEHICLES
          </button>
        </div>

      </section>

      <ImageSection />
    </>
  );
}

export default Community;
