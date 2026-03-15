import React, { useEffect, useState } from "react";

export default function Messages() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const deleteMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("messages", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl text-green-500 mb-10">Contact Messages</h1>

      {messages.length === 0 && <p className="text-gray-400">No messages yet.</p>}

      {messages.map((msg, index) => (
        <div key={index} className="bg-gray-900 border border-green-500 p-6 rounded-xl mb-6">
          <h2 className="text-xl font-bold">{msg.name}</h2>
          <p className="text-gray-400">{msg.email}</p>
          <p className="mt-2">{msg.message}</p>
          <p className="text-sm text-gray-500 mt-2">{msg.date}</p>
          <button onClick={() => deleteMessage(index)} className="mt-4 bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400 transition">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}