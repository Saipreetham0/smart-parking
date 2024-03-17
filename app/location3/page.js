"use client";
// import { useState } from "react";
import Image from "next/image";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Sensor from "../components/sensorsData";
import SetPointEdit from "../components/EditValue";
import Link from "next/link";
import PriceCard from "../components/PriceCard";
import ParkingGrid from "../components/parking";

import { getDatabase, ref, onValue, update } from "firebase/database";

import BookingForm from "../components/BookingForm";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const location = () => {
  const handleBooking = () => {
    setBookingStatus(true);
  };
  return (
    <div class="p-4  sm:ml-64">
      <div class="container mx-auto p-4">
        <h1 class="text-xl font-medium mb-4 ">Location 3</h1>
        <h1 class="text-xl font-medium mb-4">Car Location Parking Status</h1>

        <ParkingGrid irParking1="IR_Sensor_5" irParking2="IR_Sensor_6" />
      </div>

      <BookingForm
        onBooking={handleBooking}
        location="location3"
        led1="12"
        led2="14"
      />
    </div>
  );
};

export default location;
