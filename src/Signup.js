import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle signup
  const handleSignup = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      navigate("/");
    }

  } catch (error) {

    console.log(error);
    alert("Signup failed");

  }

};

  return (
    <div className="signup-page">

      {/* NAVBAR */}
      <div className="navbar">

        <div className="logo">
          <span className="logo-icon">👤</span>
          Smart Wardrobe
        </div>

        <button
          className="signin-btn"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>

      </div>

      {/* SIGNUP CARD */}
      <div className="signup-card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Join Smart Wardrobe to organize your style.
        </p>

        {/* FULL NAME */}
        <label>Full Name</label>
        <div className="input-box">
          <FaUser />
          <input
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <label>Email ID</label>
        <div className="input-box">
          <FaEnvelope />
          <input
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>

        {/* PASSWORD */}
        <label>Password</label>
        <div className="input-box">
          <FaLock />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            onChange={handleChange}
          />
          <FaEye
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        {/* SIGNUP BUTTON */}
        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="login-text">
          Already have an account? <Link to="/">Sign In</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;