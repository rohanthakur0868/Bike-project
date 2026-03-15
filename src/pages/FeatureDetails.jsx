import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";
import image26 from "../assets/image26.png";

function FeatureDetails() {

  const { feature } = useParams();
  const navigate = useNavigate();

  const data = {
    power: {
      title: "NEXT LEVEL POWER",
      image: image23,
      desc: "The Ninja 400 delivers exceptional performance with a powerful 399cc parallel twin engine built for both thrilling acceleration and smooth riding experience.",
      specs: [
        "399cc Parallel Twin Engine",
        "Maximum Power 45 HP",
        "Fuel Injection System",
        "Lightweight High Performance Engine"
      ]
    },

    handling: {
      title: "PRECISION HANDLING",
      image: image24,
      desc: "The Ninja 400 frame and suspension deliver incredible agility and stability for riders who want confidence at every speed.",
      specs: [
        "Lightweight Trellis Frame",
        "High Performance Suspension",
        "Excellent Cornering Stability",
        "Advanced Braking System"
      ]
    },

    ergonomics: {
      title: "RIDER COMFORT",
      image: image25,
      desc: "Designed with rider comfort in mind, the Ninja 400 provides a balanced and relaxed riding position for everyday riding.",
      specs: [
        "Comfortable Seat Design",
        "Relaxed Riding Position",
        "Wide Handlebar Control",
        "Balanced Footpeg Placement"
      ]
    },

    styling: {
      title: "AGGRESSIVE STYLING",
      image: image26,
      desc: "Inspired by Kawasaki supersport bikes, the Ninja 400 features sharp lines and aggressive styling.",
      specs: [
        "Sharp Aerodynamic Bodywork",
        "LED Headlights",
        "Sporty Fairing Design",
        "Premium Paint Finish"
      ]
    }
  };

  const bike = data[feature];

  if (!bike) {
    return <h1 className="text-white text-center mt-20">Feature Not Found</h1>;
  }

  return (
    <div className="bg-black text-white min-h-screen relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-8 text-white text-3xl hover:text-green-400 z-10"
      >
        ✕
      </button>

      {/* HERO IMAGE */}
      <div className="relative h-[60vh] flex items-center justify-center">

        <img
          src={bike.image}
          alt={bike.title}
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="relative text-center px-6">

          <h1 className="text-5xl md:text-6xl font-extrabold text-green-500 mb-6">
            {bike.title}
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            {bike.desc}
          </p>

        </div>
      </div>

      {/* SPECIFICATIONS SECTION */}
      <div className="px-10 md:px-20 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key <span className="text-green-500">Specifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {bike.specs.map((spec, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-green-500 hover:scale-105 transition duration-300"
            >
              {spec}
            </div>

          ))}

        </div>

      </div>

      {/* BACK BUTTON */}
      <div className="text-center pb-16">

        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 text-black px-10 py-3 rounded-full font-semibold hover:bg-green-400 transition"
        >
          Back to Gallery
        </button>

      </div>

    </div>
  );
}

export default FeatureDetails;