import ThreeSixty from "react-360-view";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Bike360 from "../components/Bike360.jsx";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image15 from "../assets/image15.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image11 from "../assets/image11.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";

function BikeDetails() {

  const { name } = useParams();
  const navigate = useNavigate();

  const images = [image9, image10, image15, image11, image12, image13, image14, image16, image17];

  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: ""
  });

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Test Ride Data:", formData);

    setSuccess(true);

    setTimeout(() => {
      setShowForm(false);
      setSuccess(false);
    }, 2000);

    setFormData({
      name: "",
      phone: "",
      date: ""
    });
  };

  return (
    <div className="pt-32 px-6 md:px-20 bg-gray-50 min-h-screen relative">

  
      <button
        onClick={() => navigate(-1)}
        className="absolute top-24 right-10 text-3xl font-bold"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-lg shadow text-center relative">

          <img
            src={images[index]}
            alt="bike"
            className="w-full max-w-md mx-auto"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 bg-gray-200 px-3 py-1 rounded"
          >
            ◀
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 bg-gray-200 px-3 py-1 rounded"
          >
            ▶
          </button>

        </div>

      
        <div>

          <h1 className="text-4xl font-bold mb-4">
            {name.replace("-", " ").toUpperCase()}
          </h1>

          <p className="text-gray-600 mb-6">
            High performance sports bike designed for speed lovers.
          </p>

          <div className="text-3xl font-bold text-green-600 mb-6">
            ₹15,00,000
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Engine</p>
              <p className="font-semibold">998cc</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Top Speed</p>
              <p className="font-semibold">299 km/h</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Mileage</p>
              <p className="font-semibold">15 km/l</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Weight</p>
              <p className="font-semibold">207 kg</p>
            </div>

          </div>

          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Book Test Ride
          </button>

        </div>

      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg w-[350px]"
          >

            <h2 className="text-xl font-bold mb-4">
              Book Test Ride
            </h2>

            {success && (
              <div className="bg-green-100 text-green-700 p-2 mb-3 rounded text-sm">
                Test Ride Booked Successfully!
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border p-2 mb-3 rounded"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              className="w-full border p-2 mb-3 rounded"
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-2 mb-4 rounded"
              required
            />

            <div className="flex justify-between">

              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

    </div>
  );
}

export default BikeDetails;