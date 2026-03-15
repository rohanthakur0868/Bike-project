import React, { useState } from "react";
import Hero from "../components/Hero.jsx";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      setSuccess(true);

      setTimeout(() => {

        setSuccess(false);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});

      }, 2500);
    }
  };

  return (
    <>

      <section className="bg-black min-h-screen px-6 md:px-20 py-20 text-white">

        <div className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            CONTACT US
          </h2>

          <div className="h-1 w-32 bg-green-500"></div>

          <p className="text-gray-400 mt-6 max-w-xl">
            Have questions or want to work with us?
            Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* CONTACT INFO */}

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>

              <p className="text-gray-400">
                Kawasaki Community <br />
                Chandigarh, India
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

          {/* CONTACT FORM */}

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-8 rounded-xl space-y-6 shadow-xl"
          >

            <div>
              <label className="block mb-2 text-sm">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm">
                Message
              </label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
              ></textarea>

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
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

      {/* SUCCESS POPUP */}

      {success && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-center p-10 rounded-xl w-80 shadow-xl">

            <div className="text-green-500 text-6xl mb-4">
              ✓
            </div>

            <h2 className="text-xl font-bold mb-2">
              Message Sent
            </h2>

            <p className="text-gray-600">
              Your message has been successfully sent.
            </p>

          </div>

        </div>

      )}

    </>
  );
}

export default Contact;