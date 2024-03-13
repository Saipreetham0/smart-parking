"use client";
// import { useState } from "react";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import ParkingGrid from "../components/parking";
import BookingForm from "../components/BookingForm";

const location = () => {
  const handleBooking = () => {
    setBookingStatus(true);
  };
  return (
    <div class="p-4  sm:ml-64">
      <div class="container mx-auto p-4">
        <h1 class="text-xl font-medium mb-4 ">Location 1</h1>
        <h1 class="text-xl font-medium mb-4">Car Location Parking Status</h1>

        <ParkingGrid irParking1="IR_Sensor_1" irParking2="IR_Sensor_2" />
      </div>

      <BookingForm
        onBooking={handleBooking}
        location="location1"
        led1="23"
        led2="22"
      />
    </div>
  );
};

export default location;
