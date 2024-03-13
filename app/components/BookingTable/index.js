import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const database = getDatabase();

  useEffect(() => {
    const fetchBookings = () => {
      const bookingsRef = ref(database, "bookings");
      onValue(bookingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const bookingArray = Object.entries(data).map(([key, value], index) => ({
            sno: index + 1,
            id: key,
            ...value,
          }));
          setBookings(bookingArray);
        } else {
          setBookings([]);
        }
      });
    };

    fetchBookings();
  }, [database]);

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDelete = (id) => {
    const bookingRef = ref(database, `bookings/${id}`);
    remove(bookingRef)
      .then(() => {
        // Remove the deleted booking from the state
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
        alert("Booking deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        alert("Failed to delete booking. Please try again later.");
      });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Booking Data</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              S. No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vehicle Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Selected Slot
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Comments
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Timestamp
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Location
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.sno}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.sno}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.vehicleNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.selectedSlot}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.comments}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDateTime(booking.timestamp)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {booking.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleDelete(booking.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
