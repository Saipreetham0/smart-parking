import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const ParkingGrid = ({ irParking1, irParking2 }) => {
  const [parking1, setParking1] = useState(0); // Default value set to 0
  const [parking2, setParking2] = useState(0); // Default value set to 0

  useEffect(() => {
    const database = getDatabase();

    // Fetch data for Parking 1
    const fetchParking1Data = () => {
      const parking1Ref = ref(database, `parkingstatus/${irParking1}`);
      onValue(parking1Ref, (snapshot) => {
        const value = snapshot.val();
        setParking1(value || 0); // Set value to 0 if null
      });
    };

    // Fetch data for Parking 2
    const fetchParking2Data = () => {
      const parking2Ref = ref(database, `parkingstatus/${irParking2}`);
      onValue(parking2Ref, (snapshot) => {
        const value = snapshot.val();
        setParking2(value || 0); // Set value to 0 if null
      });
    };

    // Call both fetch functions
    fetchParking1Data();
    fetchParking2Data();

    // Clean up listeners
    return () => {
      off(parking1Ref); // Assuming off is a function provided by Firebase to remove event listener
      off(parking2Ref); // Assuming off is a function provided by Firebase to remove event listener
    };
  }, [irParking1, irParking2]); // Depend on irParking1 and irParking2

  const getBackgroundColor = (value) => {
    return value === 0 ? "bg-red-500" : "bg-green-500";
  };

  return (
    <div className="container mx-auto p-4 justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-lg shadow-md text-center text-xl ${getBackgroundColor(
            parking1
          )}`}
        >
          Parking 1
        </div>
        <div
          className={`p-4 rounded-lg shadow-md text-center text-xl ${getBackgroundColor(
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
