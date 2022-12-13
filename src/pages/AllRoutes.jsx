import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./Customers";
import Home from "./Home";
import Login from "./Login";
import Partners from "./Partners";
import Price from "./Price";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/price" element={<Price />} />
      <Route path="/partners" element={<Partners />} />
    </Routes>
  );
};

export default AllRoutes;
