import React, { useState } from "react";
import { getDatabase, ref, push, update } from "firebase/database";

const BookingForm = ({ onBooking, location, led1, led2 }) => {
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [comments, setComments] = useState("");
  const [showForm, setShowForm] = useState(false); // State variable to control form visibility
  const database = getDatabase();

  const handleBooking = async () => {
    if (!name || !vehicleNumber || !selectedSlot || !location) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const bookingRef = ref(database, "bookings");
      const newBookingRef = push(bookingRef);
      await update(newBookingRef, {
        name,
        vehicleNumber,
        selectedSlot,
        comments,
        location,
        timestamp: new Date().toISOString(),
      });

      // Determine which output location to update based on the selected slot
      let outputLocation;
      if (selectedSlot === "Parking 1") {
        outputLocation = `board1/outputs/digital/${led1}`;
      } else if (selectedSlot === "Parking 2") {
        outputLocation = `board1/outputs/digital/${led2}`;
      }

      // Update the value in the determined output location to 1 indicating a booking was made
      if (outputLocation) {
        const outputRef = ref(database, outputLocation);
        await update(outputRef, 1);
      }

      alert("Booking successful!");
      setName("");
      setVehicleNumber("");
      setSelectedSlot("");
      setComments("");
      setShowForm(false); // Close the form after successful booking
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking. Please try again later.");
    }
  };

  return (
    <div className="mt-8">
      {!showForm ? ( // Conditionally render the form based on showForm state
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => setShowForm(true)} // Show the form when button is clicked
        >
          Book Parking Slot
        </button>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Book Parking Slot</h2>
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Vehicle Number:</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Parking Slot:</label>
            <select
              className="w-full border rounded-md py-2 px-3"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
            >
              <option value="">Select Slot</option>
              <option value="Parking 1">Parking 1</option>
              <option value="Parking 2">Parking 2</option>
              {/* Add more options for other parking slots */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Comments (optional):</label>
            <textarea
              className="w-full border rounded-md py-2 px-3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleBooking}
          >
            Book Slot
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
