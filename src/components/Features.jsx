import React from 'react';

const featureIcons = [
  {
    title: "Exclusive Events",
    description:
      "Attend members-only rides, meetups, and competitions across the country.",
    icon: (
      <svg
        className="w-16 h-16 mb-6 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6h13v13H9zM3 6h6v13H3V6z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Community Support",
    description:
      "Connect with fellow Kawasaki riders for tips, maintenance, and advice.",
    icon: (
      <svg
        className="w-16 h-16 mb-6 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m10-4a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Latest Updates",
    description:
      "Be the first to know about new releases, bikes, and Kawasaki news.",
    icon: (
      <svg
        className="w-16 h-16 mb-6 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m4-4H6v12h12V8z"
        ></path>
      </svg>
    ),
  },
];

function Features() {
  return (
    <section className="w-full bg-gray-50 py-20 px-10 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
        Why Join the <span className="text-green-500">Kawasaki Community</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureIcons.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
