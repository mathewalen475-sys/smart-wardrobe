import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./AddItem.css";

function AddItem() {
  return (
    <div className="additem-container">
      
      <Sidebar />

      <div className="additem-main">

        <Navbar />

        <div className="additem-content">

          <p className="breadcrumb">INVENTORY / <span>ADD NEW</span></p>

          <h1 className="title">Add Item</h1>

          <p className="subtitle">
            Choose a source to add your clothing to your digital closet.
          </p>

          <div className="options">

            <div className="option-card">
              <div className="icon">🖼️</div>
              <p>Album</p>
            </div>

            <div className="option-card">
              <div className="icon">📷</div>
              <p>Camera</p>
            </div>

            <div className="option-card">
              <div className="icon">📋</div>
              <p>Clipboard</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddItem;