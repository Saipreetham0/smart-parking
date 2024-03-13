// ParkingGrid.js

import React, { useState, useEffect } from "react";
import { db } from "@/utils/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";

const ParkingGrid = ({ irParking1, irParking2 }) => {
  const [parking1, setParking1] = useState();
  const [parking2, setParking2] = useState();
  const database = getDatabase();

  useEffect(() => {
    const fetchData = () => {
      // Replace with your Realtime Database URL
      const db = getDatabase();

      const devicesRef = ref(db, "parkingstatus/outputs/digital");

      // Listen for changes on relay 1
      const fetchSensorValue1 = ref(db, `parkingstatus/${irParking1}`);

      onValue(fetchSensorValue1, (snapshot) => {
        const value = snapshot.val();
        setParking1(value);
      });
      const fetchSensorValue2 = ref(db, `parkingstatus/${irParking2}`);
      onValue(fetchSensorValue2, (snapshot) => {
        const value = snapshot.val();
        setParking2(value);
      });
    };

    fetchData();
  }, []);

  const getBackgroundColor = (value) => {
    return value === 0 ? "bg-red-500" : "bg-green-500";
  };
  return (
    <div className="container mx-auto p-4 justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`bg-red-500 p-4 rounded-lg shadow-md text-center text-xl ${getBackgroundColor(
            parking1
          )}`}
        >
          Parking 1
        </div>
        <div
          className={`bg-red-500 p-4 rounded-lg shadow-md text-center text-xl ${getBackgroundColor(
            parking2
          )}`}
        >
          Parking 2
        </div>
      </div>
    </div>
  );
};

export default ParkingGrid;
