import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      joined: new Date().toLocaleString()
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);

    setTimeout(() => {
      navigate("/members");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="bg-white p-8 rounded-xl w-full max-w-md">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 mb-4 hover:text-black"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-2 mb-4 text-center rounded">
            Account Created Successfully
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          {/* BUTTONS */}
          <div className="flex gap-3">

            <button
              type="submit"
              className="w-full bg-green-500 text-black font-semibold py-3 rounded"
            >
              Create Account
            </button>

            <button
              type="reset"
              className="w-full bg-gray-300 text-black font-semibold py-3 rounded"
            >
              Clear
            </button>

          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-red-500 text-white font-semibold py-3 rounded"
          >
            Cancel
          </button>

        </form>

      </div>

    </div>
  );
}