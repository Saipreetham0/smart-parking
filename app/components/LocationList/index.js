import React, { useState, useEffect } from "react";
import Link from "next/link";

// import React, { useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { getDatabase, ref, set } from "firebase/database";

const locations = [
  {
    name: "Location 1",
    available: 5,
    occupied: 10,
    prices: {
      "2-wheeler": 20,
      "3-wheeler": 30,
      "4-wheeler": 40,
    },
  },
  {
    name: "Location 2",
    available: 2,
    occupied: 13,
    prices: {
      "2-wheeler": 15,
      "3-wheeler": 25,
      "4-wheeler": 35,
    },
  },
  {
    name: "Location 3",
    available: 2,
    occupied: 13,
    prices: {
      "2-wheeler": 15,
      "3-wheeler": 25,
      "4-wheeler": 35,
    },
  },
  {
    name: "Location 4",
    available: 3,
    occupied: 11,
    prices: {
      "2-wheeler": 15,
      "3-wheeler": 25,
      "4-wheeler": 35,
    },
  },
  // Add data for other locations
];
const Location = ({ location }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const database = getDatabase();
        const locationRef = ref(database, "locations/" + location.name);
        onValue(locationRef, (snapshot) => {
          const data = snapshot.val();
          setLocationData(data);
        });
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, [location.name]);
  return (
    <Link key={location.name} href={`/location/${location.name}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md  hover:scale-105 overflow-hidden">
        {/* Card content */}
        <div className="p-4">
          <h3 className="text-xl font-bold">{location.name}</h3>
          <p className="text-gray-600 dark:text-gray-200">
            Available: {location.available}, Occupied: {location.occupied}
          </p>
          <div className="mt-2">
            <p className="text-gray-700 dark:text-gray-300">Pricing:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-1">
              {Object.entries(location.prices).map(([vehicleType, price]) => (
                <li key={vehicleType}>
                  {vehicleType}: {price} ₹
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Hover effect for a subtle highlight on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"></div>
      </div>
    </Link>
  );
};

const LocationList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {locations.map((location) => (
        <Location key={location.name} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
