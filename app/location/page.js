"use client";
// import { useState } from "react";
import Image from "next/image";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Sensor from "../components/sensorsData";
import SetPointEdit from "../components/EditValue";
import Link from "next/link";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const location = () => {
  return (
    <div>
      <div class="container mx-auto p-4">
        <h1 class="text-xl font-medium mb-4">Car Location Parking Status</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <h2 class="text-xl font-medium mb-2">Location 1</h2>
            <p class="text-green-500 font-bold">
              Available: <span id="location1-available">0</span>
            </p>
            <p class="text-red-500 font-bold">
              Occupied: <span id="location1-occupied">2</span>
            </p>
            <p>Total: 15</p>
          </div>
        </div>
      </div>

      <div class="container mx-auto p-4">
        <h1 class="text-xl font-medium mb-4">Car Parking Information</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default location;
