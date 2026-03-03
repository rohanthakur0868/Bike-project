function EventModal({ type, onClose }) {
  const titles = {
    meetup: "Kawasaki Riders Meetup",
    track: "Track Day Experience",
    expo: "Kawasaki Expo 2026",
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4">
      <div className="bg-black text-white p-8 rounded-2xl max-w-md w-full relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-green-500 mb-4">
          {titles[type]}
        </h2>

        <p className="text-gray-300 mb-6">
          Please fill the form to participate in this event.
        </p>

        <button
          className="w-full py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600"
        >
          Proceed to Register
        </button>
      </div>
    </div>
  );
}

export default EventModal;