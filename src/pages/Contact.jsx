import React from 'react'
import Hero from "../components/Hero.jsx";

function Contact() {
  return (
    <>
    <Hero />
    <section className="bg-black min-h-screen px-6 md:px-20 py-20 text-white">
      
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold mb-4">CONTACT US</h2>
        <div className="h-1 w-32 bg-green-500"></div>
        <p className="text-gray-400 mt-6 max-w-xl">
          Have questions or want to work with us?  
          Fill out the form below and our team will get back to you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
            <p className="text-gray-400">
              Kawasaki Community<br />
              Chandigradh, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
            <p className="text-gray-400">+91 86290 63007</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✉ Email</h3>
            <p className="text-gray-400">support@kawasaki.com</p>
          </div>
        </div>
        <form className="bg-zinc-900 p-8 rounded-xl space-y-6 shadow-xl">
          
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Contact;