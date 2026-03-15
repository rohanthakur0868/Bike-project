import { useState } from "react";

function Join({ onClose }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      name,
      email,
      phone,
      joined: new Date().toLocaleString()
    };

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.push(newMember);

    localStorage.setItem("members", JSON.stringify(members));

    setSuccess(true);

    setName("");
    setEmail("");
    setPhone("");

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center">

      <div className="relative bg-black p-8 rounded-xl w-full max-w-md border border-green-500">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-green-500 text-2xl font-bold text-center mb-6">
          Join Our Community
        </h2>

        {success && (
          <div className="bg-green-600 text-white text-center p-2 rounded mb-4">
            Successfully Joined 🚀
          </div>
        )}

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
            className="w-full py-2 bg-green-500 rounded font-bold text-black hover:bg-green-400 transition"
          >
            Join Now
          </button>

        </form>
      </div>
    </div>
  );
}

export default Join;