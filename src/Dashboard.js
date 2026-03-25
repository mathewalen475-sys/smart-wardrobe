import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import {
  FaPlus,
  FaCalendarAlt,
  FaChartBar,
  FaBell
} from "react-icons/fa";

import {
  FiHome,
  FiUser
} from "react-icons/fi";

import { Link } from "react-router-dom";


function Dashboard() {

  // ✅ username state
  const [username, setUsername] = useState("Guest");


  // ✅ load username from localStorage
  useEffect(() => {

    const storedUser = localStorage.getItem("username");

    if (storedUser) {
      setUsername(storedUser);
    }

  }, []);


  return (

    <div className="dashboard">

      {/* Animated floating background light */}
      <span className="bg-light"></span>


      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="logo">
          <div className="logo-icon">👕</div>
          <span>Smart Wardrobe</span>
        </div>


        <ul className="menu">

          {/* HOME */}
          <Link to="/dashboard" className="menu-link">
            <li className="active">
              <FiHome /> Home
            </li>
          </Link>


          {/* PROFILE */}
          <Link to="/profile" className="menu-link">
            <li>
              <FiUser /> Profile
            </li>
          </Link>


          {/* OUTFIT CALENDAR */}
          <Link to="/calendar" className="menu-link">
            <li>
              <FaCalendarAlt /> Outfit Calendar
            </li>
          </Link>

        </ul>

      </div>



      {/* MAIN CONTENT */}
      <div className="main">


        {/* TOPBAR */}
        <div className="topbar">

          <input
            className="search"
            placeholder="Search wardrobe, outfits, or trends..."
          />


          <div className="user-area">

            <FaBell className="bell" />


            <div className="profile">

              <div className="avatar"></div>

              <div>
                {/* ✅ dynamic username */}
                <h4>{username}</h4>
                <p>STANDARD ACCOUNT</p>
              </div>

            </div>

          </div>

        </div>



        {/* PAGE CONTENT */}
        <div className="content">

          {/* ✅ dynamic greeting */}
          <h1>Hello {username}</h1>

          <p className="subtitle">
            Your curated style sanctuary is ready for exploration.
          </p>


          <h3>Quick Actions</h3>



          {/* CARDS */}
          <div className="cards">


            {/* ADD ITEM */}
            <Link to="/add-item" className="card">

              <div className="icon-box">
                <FaPlus />
              </div>

              <h4>Add Item</h4>

              <p>
                Catalog your latest fashion finds.
              </p>

            </Link>



            {/* CALENDAR */}
            <Link to="/calendar" className="card">

              <div className="icon-box">
                <FaCalendarAlt />
              </div>

              <h4>Outfit Calendar</h4>

              <p>
                Plan your weekly aesthetics.
              </p>

            </Link>



            {/* 3D PREVIEW */}
            <Link to="/3d-preview" className="card">

              <div className="icon-box">
                <FaChartBar />
              </div>

              <h4>3D Preview</h4>

              <p>
                virtual view
              </p>

            </Link>


          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;