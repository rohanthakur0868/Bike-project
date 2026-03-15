import React from "react";
import { useNavigate } from "react-router-dom";

function EventModal({ type, onClose }) {

  const navigate = useNavigate();

  const events = {
    meetup: {
      title: "Kawasaki Riders Meetup",
      desc: "Join fellow Kawasaki riders for an exciting meetup. Share experiences, explore new routes, and connect with the community."
    },

    track: {
      title: "Track Day Experience",
      desc: "Push your Kawasaki to the limit on a professional racing track with expert guidance and thrilling speed."
    },

    expo: {
      title: "Kawasaki Expo 2026",
      desc: "Experience the latest Kawasaki bikes, technology, and exclusive launches at the biggest Kawasaki expo."
    }
  };

  const event = events[type];

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

    
      <div className="relative bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl max-w-md w-full shadow-2xl border border-green-500/20 animate-[fadeIn_.3s_ease]">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-green-500 mb-4">
          {event.title}
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          {event.desc}
        </p>
        <div className="flex gap-4">

          <button
            onClick={() => navigate("/signup")}
            className="flex-1 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition"
          >
            Register Now
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-500 rounded-full hover:bg-gray-800 transition"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default EventModal;