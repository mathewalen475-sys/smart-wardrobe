import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

function Sidebar() {

  return (
    <div className="sidebar">

      <div className="logo">
        <span className="logo-icon">👕</span>
        <span className="logo-text">Smart Wardrobe</span>
      </div>

      <ul className="menu">

        <li className="active">
          <FaHome /> Home
        </li>

        <li>
          <FaUser /> Profile
        </li>

        <li>
          <FaCog /> Outfit Calendar
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;