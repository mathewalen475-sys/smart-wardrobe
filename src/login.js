import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {

        // ✅ Save username for dashboard greeting
        localStorage.setItem("username", data.user.name);

        // ✅ Navigate to dashboard
        navigate("/dashboard");

      }

    } catch (error) {

      console.log(error);
      alert("Login failed");

    }

  };


  return (

    <div className="login-page">

      {/* Floating animated blur circle */}
      <span className="bg-circle"></span>


      <div className="login-container">


        {/* HEADER */}
        <div className="header">

          <div className="logo-box">
            <span className="material-symbols-outlined">
              checkroom
            </span>
          </div>

          <h1>Smart Wardrobe</h1>

          <p>
            Your digital fashion assistant
          </p>

        </div>



        {/* FORM */}
        <div className="form">


          {/* EMAIL */}
          <div className="input-group">

            <label>Email ID</label>

            <div className="input-field">

              <span className="material-symbols-outlined icon">
                mail
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>

          </div>



          {/* PASSWORD */}
          <div className="input-group">

            <label>Password</label>

            <div className="input-field">

              <span className="material-symbols-outlined icon">
                lock
              </span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <span
                className="material-symbols-outlined eye"
                onClick={()=>setShowPassword(!showPassword)}
              >
                {showPassword ? "visibility_off" : "visibility"}
              </span>

            </div>


            <div className="forgot">
              <span>Forgot Password?</span>
            </div>

          </div>



          {/* LOGIN BUTTON */}
          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>



        {/* FOOTER */}
        <div className="footer">

          <p>
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>

        </div>



        {/* DECORATIVE */}
        <div className="decorative">

          <div className="line"></div>

          <div className="dots">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="line"></div>

        </div>


      </div>

    </div>

  );

};

export default Login;