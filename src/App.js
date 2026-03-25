import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import AddItem from "./AddItem";
import Planner3D from "./Planner3D";
import Profile from "./Profile";
import Calendar from "./Calendar";

function App() {
  return (
    <Router>
      <Routes>

        {/* First page */}
        <Route path="/" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/add-item" element={<AddItem />} />

        <Route path="/3d-preview" element={<Planner3D />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </Router>
  );
}

export default App;