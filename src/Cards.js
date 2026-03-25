import React from "react";
import { FaPlus, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cards() {

  return (
   <div className="cards">

  <Link to="/add-item" className="card">
    <div className="icon-box">+</div>
    <h4>Add Item</h4>
    <p>Catalog your latest fashion finds.</p>
  </Link>

  <Link to="/calendar" className="card">
    <div className="icon-box">📅</div>
    <h4>Outfit Calendar</h4>
    <p>Plan your weekly aesthetics.</p>
  </Link>

  <Link to="/3d-preview" className="card">
    <div className="icon-box">📊</div>
    <h4>3D Preview</h4>
    <p>virtual view</p>
  </Link>

</div>
  );
}

export default Cards;