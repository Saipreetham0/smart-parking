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
import BookingTable from "../components/BookingTable";

import { getAuth, onAuthStateChanged } from "firebase/auth";



const admin = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64">

      <BookingTable/>
      </div>
    </div>
  );
};

export default admin;
