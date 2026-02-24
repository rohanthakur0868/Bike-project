import React from "react";
import feature1 from "../assets/feature1.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

function ImageSection() {
  return (
    <section className="w-full bg-[#1E1E1E] py-24 px-6 md:px-20">
      <div className="flex items-center mb-12">
        <h2 className="text-white text-3xl font-bold mr-6">
          OFFERS & PROMOTIONS
        </h2>
        <div className="flex-1 h-1 bg-green-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={image1}
            alt="Exclusive Riding Gear"
            className="w-[450px] rounded-xl shadow-lg"
          />
          <p className="text-white font-bold text-lg">
            Exclusive Riding Gear Offers
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full border border-green-500 hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300">
            View More
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={image2}
            alt="Service & Maintenance"
            className="w-[450px] rounded-xl shadow-lg"
          />
          <p className="text-white font-bold text-lg">
            Service & Maintenance Benefits
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full border border-green-500 hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300">
            View More
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={feature1}
            alt="Community Events"
            className="w-[450px] rounded-xl shadow-lg"
          />
          <p className="text-white font-bold text-lg">
            Community Events & Ride Programs
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full border border-green-500 hover:bg-green-500 hover:text-black hover:scale-105 transition duration-300">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}

export default ImageSection;

