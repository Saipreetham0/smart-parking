// components/PriceCard.js
import React from "react";

const PriceCard = ({ location, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Location {location}
        </h2>
        <ul className="text-gray-700 dark:text-gray-300">
          <li className="flex items-center py-1">
            <span className="w-24">2-wheeler:</span>
            <span className="ml-auto">${price["2-wheeler"]}</span>
          </li>
          <li className="flex items-center py-1">
            <span className="w-24">3-wheeler:</span>
            <span className="ml-auto">${price["3-wheeler"]}</span>
          </li>
          <li className="flex items-center py-1">
            <span className="w-24">4-wheeler:</span>
            <span className="ml-auto">${price["4-wheeler"]}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
