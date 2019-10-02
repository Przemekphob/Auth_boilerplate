import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Navigation = () => {
  return (
    <div>
      <Link to="/stocks">Stocks</Link>
      <GoogleAuth />
    </div>
  );
};

export default Navigation;
