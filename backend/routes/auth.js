const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");


/* ================= SIGNUP ================= */

router.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });

    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Signup failed"
    });

  }

});


/* ================= LOGIN ================= */

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "User not found"
      });

    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });

    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Login failed"
    });

  }

});

module.exports = router;