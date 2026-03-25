import React from "react";
import "./CalendarModal.css";

const CalendarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="calendar-overlay">
      <div className="calendar-modal">
        <div className="calendar-header">
          <h3>Schedule Outfit</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <input type="date" className="calendar-input" />

        <button className="save-btn">Save Schedule</button>
      </div>
    </div>
  );
};

export default CalendarModal;
