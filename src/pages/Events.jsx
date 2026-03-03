import React, { useState } from "react";
import Hero from "../components/Hero.jsx";
import NextSection from "../components/NextSection.jsx";
import ImageSection from "../components/ImageSection.jsx";
import EventModal from "../components/EventModal.jsx";

import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";

function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <>
      <Hero />


      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-black mr-6">
            UPCOMING EVENTS
          </h2>
          <div className="flex-1 h-1 bg-green-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
          <EventCard
            date="12 FEB 2026"
            title="Kawasaki Riders Meetup"
            text="Join Kawasaki riders for an exciting meetup."
            onClick={() => setActiveEvent("meetup")}
            btn="View Details"
          />

  
          <EventCard
            date="05 MAR 2026"
            title="Track Day Experience"
            text="Experience Kawasaki superbikes on a race track."
            onClick={() => setActiveEvent("track")}
            btn="Register Now"
          />

          <EventCard
            date="20 APR 2026"
            title="Kawasaki Expo 2026"
            text="Explore new Kawasaki models and tech."
            onClick={() => setActiveEvent("expo")}
            btn="Explore Event"
          />
        </div>
      </section>

      <NextSection />
      <ImageSection />

      {activeEvent && (
        <EventModal
          type={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}

export default Events;

function EventCard({ date, title, text, btn, onClick }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-8 text-center hover:shadow-xl transition">
      <p className="text-green-500 font-semibold text-sm mb-2">{date}</p>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{text}</p>
      <button
        onClick={onClick}
        className="px-8 py-3 bg-black text-white rounded-full hover:bg-green-500"
      >
        {btn}
      </button>
    </div>
  );
}