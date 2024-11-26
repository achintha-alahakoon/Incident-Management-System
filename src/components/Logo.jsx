import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import "../styles/Logo.css";

const Logo = ({ collapsed }) => {
  return (
    <div className={`logo ${collapsed ? "collapsed" : ""}`}>
      <img src={collapsed ? logo1 : logo} alt="logo" />
    </div>
  );
};

export default Logo;
