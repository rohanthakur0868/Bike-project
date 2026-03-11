import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully 🚀");
    e.target.reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Join the <span className="text-green-500">Kawasaki</span> Community
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Ride together. Connect together.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
            >
              Create Account
            </button>

            <button
              type="reset"
              className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 rounded-xl transition"
            >
              Clear
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-3 rounded-xl transition"
          >
            Cancel
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already a member?{" "}
          <Link to="/login" className="text-green-500 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}