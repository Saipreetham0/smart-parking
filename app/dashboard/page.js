"use client";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Sensor from "../components/sensorsData";
import SetPointEdit from "../components/EditValue";
// import Link from "next/link";
import LocationList from "../components/LocationList";
import PriceCard from "../components/PriceCard";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const prices = {
  1: {
    "2-wheeler": 15,
    "3-wheeler": 25,
    "4-wheeler": 35,
  },
  2: {
    "2-wheeler": 20,
    "3-wheeler": 30,
    "4-wheeler": 40,
  },
  3: {
    "2-wheeler": 18,
    "3-wheeler": 28,
    "4-wheeler": 38,
  },
  4: {
    "2-wheeler": 17,
    "3-wheeler": 27,
    "4-wheeler": 37,
  },
};

const dashboard = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64">
        <div className=" container mx-auto p-4 border border-white  rounded-lg dark:border-gray-700 mt-1">
          {/* <h2 className="text-xl font-medium m-4 ">
            Welcome back, UserName 🙂
          </h2> */}
          {/* <Sensor /> */}
          <h2 className="text-xl font-medium m-5 ">
            Navigation and Reservation Based Smart Parking Platform Using
            Genetic Optimization for Smart Cities
          </h2>
        </div>

        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Price List</h1>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
            {Object.keys(prices).map((location) => (
              <div key={location} className="w-full sm:w-1/2 md:w-auto">
                <Link href={`/location/${location}`} passHref>
                  <PriceCard location={location} price={prices[location]} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <LocationList /> */}
    </div>
  );
};

export default dashboard;
