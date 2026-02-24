import React from "react";
import Rectangle21 from "../assets/Rectangle21.png";
import Rectangle22 from "../assets/Rectangle22.png";
import Rectangle23 from "../assets/Rectangle23.png";

function NextSection() {
  return (
    <>
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
                src={Rectangle21}
                alt="Ninja ZX-10R"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">
              Track Performance Offer
            </h1>

            <p className="text-gray-700 max-w-md text-lg">
              Experience race-level performance with exclusive offers on
              Kawasaki superbikes. Limited-time promotions for true speed
              enthusiasts.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle22}
                alt="Z H2"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">
              Street Power Deals
            </h1>

            <p className="text-gray-700 max-w-md text-lg">
              Unleash raw street power with special promotions on naked bikes.
              Bold design, supercharged performance, now at exclusive prices.
            </p>
          </div>
          <div className="group flex flex-col items-center text-center space-y-6 border border-gray-300 rounded-2xl p-6 bg-white transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden rounded-xl">
              <img
                src={Rectangle23}
                alt="Ninja 400"
                className="w-[450px] transition duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-black text-2xl font-bold">
              Everyday Ride Benefits
            </h1>

            <p className="text-gray-700 max-w-md text-lg">
              Discover lightweight, sporty motorcycles perfect for daily rides.
              Enjoy easy ownership offers and rider-friendly performance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NextSection;
