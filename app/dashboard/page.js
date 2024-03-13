"use client";
// import { useState } from "react";
import Image from "next/image";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Sensor from "../components/sensorsData";
import SetPointEdit from "../components/EditValue";
import Link from "next/link";
import LocationList from '../components/LocationList';

import { getAuth, onAuthStateChanged } from "firebase/auth";


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
          {/* <SetPointEdit /> */}

          {/* <div className="flex flex-wrap justify-center gap-4">
            <Link href="/location1">
              <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md dark:bg-gray-800 ">
                <p className="text-xl font-bold">Location 1</p>
              </div>
            </Link>
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md dark:bg-gray-800 ">
              <p className="text-xl font-bold">Location 2</p>
            </div>
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md dark:bg-gray-800 ">
              <p className="text-xl font-bold">Location 3</p>
            </div>
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md dark:bg-gray-800 ">
              <p className="text-xl font-bold">Location 4</p>
            </div>
          </div>*/}
        </div>
      </div>

      <LocationList />
    </div>
  );
};

export default dashboard;
