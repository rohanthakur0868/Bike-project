import React, { useState } from "react";
import { Link } from "react-router-dom";

import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image15 from "../assets/image15.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image11 from "../assets/image11.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";

function BikeCategories() {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (name) => {
    let updated;

    if (favorites.includes(name)) {
      updated = favorites.filter((item) => item !== name);
    } else {
      updated = [...favorites, name];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-20">

      <div className="flex items-center mb-12">
        <h2 className="text-black text-3xl font-bold mr-6">
          BIKE COLLECTIONS
        </h2>
        <div className="flex-1 h-1 bg-green-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-16 text-center">
        {["SPORTS", "SUPER SPORTS", "HYPER SPORTS"].map((item) => (
          <div key={item} className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gray-400"></span>
            <p className="text-sm tracking-widest text-gray-600">{item}</p>
            <span className="h-px w-12 bg-gray-400"></span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">

        <Column
          bikes={[
            { img: image9, name: "NINJA 400" },
            { img: image10, name: "NINJA 650" },
            { img: image15, name: "NINJA 1000" },
          ]}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <Column
          border
          bikes={[
            { img: image12, name: "NINJA ZX-4RR" },
            { img: image13, name: "NINJA ZX-6R" },
            { img: image14, name: "NINJA ZX-10R" },
            { img: image11, name: "NINJA ZX-14R" },
          ]}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <Column
          bikes={[
            { img: image16, name: "NINJA H2 SX" },
            { img: image17, name: "NINJA H2 R" },
          ]}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

      </div>

    </section>
  );
}

function Column({ bikes, border, favorites, toggleFavorite }) {
  return (
    <div className={`space-y-20 text-center px-6 ${border ? "border-x border-gray-200" : ""}`}>
      {bikes.map((bike, i) => (
        <div key={i} className="space-y-4 group relative">

          {/* Heart Icon */}
          <button
            onClick={() => toggleFavorite(bike.name)}
            className="absolute right-6 top-0 text-2xl hover:scale-125 transition"
          >
            {favorites.includes(bike.name) ? "❤️" : "🤍"}
          </button>

          <img
            src={bike.img}
            alt={bike.name}
            className="w-[260px] mx-auto transition-transform duration-300 group-hover:scale-110"
          />

          <h3 className="text-sm font-semibold">{bike.name}</h3>

          <p className="text-xs text-gray-500">
            STARTING AT ₹15,00,000
          </p>

          <Link
            to={`/bike/${bike.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block text-xs px-4 py-2 border border-black hover:bg-black hover:text-white transition"
          >
            View Details
          </Link>

        </div>
      ))}
    </div>
  );
}

export default BikeCategories;