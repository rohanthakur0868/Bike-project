import { useState } from "react";

function Join({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    onClose(); // submit ke baad close
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center">
      <div className="relative bg-black p-8 rounded-xl w-full max-w-md border border-green-500">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-green-500 text-2xl font-bold text-center mb-6">
          Join Our Community
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full mb-6 p-2 rounded bg-black border border-gray-600 text-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-green-500 rounded font-bold text-black"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;