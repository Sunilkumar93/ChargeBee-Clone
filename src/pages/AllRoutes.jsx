import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./Customers";
import Demo from "./Demo";
import Home from "./Home";
import Login from "./Login";
import Partners from "./Partners";
import Price from "./Price";
import Resources from "./Resources";
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
      <Route path="/resources" element={<Resources />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
};

export default AllRoutes;
