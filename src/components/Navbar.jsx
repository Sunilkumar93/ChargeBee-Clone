import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/login">Login</Link>
      <Link to="/partners">Partners</Link>
    </div>
  );
};

export default Navbar;
