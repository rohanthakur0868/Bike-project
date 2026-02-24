import React, { useState } from "react";

function JoinCommunity() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We'll reach you at ${formData.email}.`);
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-28 px-6 md:px-20 relative overflow-hidden">

      <div className="absolute -top-20 -left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

    
      <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl text-center relative z-10 space-y-8">
    
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Join the <span className="text-green-400">Kawasaki Community</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl">
          Sign up to get exclusive updates, event invites, and community news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 px-6 py-3 rounded-full bg-gray-900 text-white placeholder-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 px-6 py-3 rounded-full bg-gray-900 text-white placeholder-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full font-bold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black shadow-lg transform transition hover:scale-105"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default JoinCommunity;
