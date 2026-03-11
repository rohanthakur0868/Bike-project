import React from "react";
import ThreeSixty from "react-360-view";

function Bike360() {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">

      <h2 className="text-xl font-semibold mb-4">
        360° Bike View
      </h2>

      <ThreeSixty
        amount={6}
        imagePath="/src/assets/bike360/"
        fileName="bike-{index}.png"
      />

    </div>
  );
}

export default Bike360;