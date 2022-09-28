import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BookVehicle from "../pages/BookVehicle";
import Home from "../pages/Home";
import VehicleDetails from "../pages/VehicleDetails";
import VehicleListing from "../pages/VehicleListing";
import VehicleComponent from "../pages/VehicleComponents.js";
import Booking from "../pages/Booking";
import Feedback from "./../pages/Feedback";
import Bill from "../pages/bill";
import Signin from "../Signup1";
import Login1 from "../Login1";
import Payment from "../pages/Payment";
import Mybookings from "../pages/Mybookings";



const Routers = () => {

  
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mybookings" element={<Mybookings />} />
        <Route path="/bookvehicle" element={<BookVehicle />} />
        <Route path="/vehicles" element={<VehicleComponent />} />
        <Route path="/vehicleListing/:city/:categoryName" element={<VehicleListing />} />
        <Route path="/vehicles/:productId" element={<VehicleDetails/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/bill/:pickupDate/:dropDate" element={<Bill/>} />
        <Route path="/signup1" element={<Signin/>} />
        <Route path="/login1" element={<Login1/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    );
  };
  
  export default Routers;