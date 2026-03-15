import React from "react";
import { useNavigate } from "react-router-dom";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";

function FeaturedBikes() {
  const navigate = useNavigate();

  const bikes = [
    { id: 1, name: "Ninja ZX-10R", img: Rectangle1, price: "₹16,79,000" },
    { id: 2, name: "Z H2", img: Rectangle2, price: "₹23,02,000" },
    { id: 3, name: "Ninja 400", img: Rectangle3, price: "₹5,24,000" },
    { id: 4, name: "Versys 650", img: Rectangle4, price: "₹7,77,000" },
    { id: 5, name: "Z650", img: Rectangle5, price: "₹6,59,000" },
    { id: 6, name: "Ninja H2", img: Rectangle6, price: "₹79,90,000" },
  ];

  return (
    <section className="min-h-screen bg-[#0b0b0b] py-24 px-6 md:px-20">
      <div className="flex justify-end mb-10">
        <button
          onClick={() => navigate("/community")}
          className="text-white text-3xl hover:text-green-500 transition"
        >
          ✕
        </button>
      </div>
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-20">
        Featured <span className="text-green-500">Kawasaki Bikes</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/40 transition duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(34,197,94,0.25)]"
          >
            <div className="relative overflow-hidden">
              <img
                src={bike.img}
                alt={bike.name}
                className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">

                <button
                  onClick={() => navigate(`/bike/${bike.id}`)}
                  className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition"
                >
                  View Details
                </button>

              </div>
            </div>
            <div className="p-6 text-center">

              <h2 className="text-white text-xl font-bold group-hover:text-green-400 transition">
                {bike.name}
              </h2>

              <p className="text-green-400 font-semibold text-lg mt-2">
                {bike.price}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedBikes;