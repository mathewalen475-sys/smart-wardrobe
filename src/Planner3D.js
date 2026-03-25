import React from "react";
import "./Planner3D.css";

const Planner3D = () => {
  return (
    <div className="planner-page">

      {/* Header */}
      <header className="planner-header">
        <span className="material-symbols-outlined menu-icon">menu</span>

        <h1 className="planner-title">Smart Wardrobe</h1>

        <div className="planner-avatar">
          <span className="material-symbols-outlined">person</span>
        </div>
      </header>

      {/* 3D Viewport */}
      <section className="viewport">
        <div className="viewport-image"></div>

        <div className="look-overlay">
          <p className="overlay-label">Current Look</p>
          <p className="overlay-title">Autumn Formal '24</p>
        </div>
      </section>

      {/* Controls */}
      <div className="planner-controls">

        <button className="primary-btn">
          <div className="btn-left">
            <span className="material-symbols-outlined">360</span>
            <span>Rotate 3D</span>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        <button className="secondary-btn">
          <div className="btn-left">
            <span className="material-symbols-outlined">auto_fix_high</span>
            <span>Add Accessories</span>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        <button className="secondary-btn">
          <div className="btn-left">
            <span className="material-symbols-outlined">zoom_in</span>
            <span>Zoom View</span>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

      </div>

      {/* Bottom Navigation */}
      <nav className="planner-nav">

        <div className="nav-item">
          <span className="material-symbols-outlined">home</span>
          <p>Home</p>
        </div>

        <div className="nav-item">
          <span className="material-symbols-outlined">checkroom</span>
          <p>Closet</p>
        </div>

        <div className="nav-item active">
          <span className="material-symbols-outlined">calendar_month</span>
          <p>Planner</p>
        </div>

        <div className="nav-item">
          <span className="material-symbols-outlined">settings</span>
          <p>Settings</p>
        </div>

      </nav>

    </div>
  );
};

export default Planner3D;
