const mongoose = require("mongoose");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../services/auth");

let userLogin = async (req, res) => {
  // console.log("I am in userLogin function");
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.send("Invalid email or password ");
  } else {
    //const sessionId = uuidv4();
    const token = setUser(user);
    res.cookie("uid", token);
    console.log(req);
    console.log(res);
    res.status(200).send({ message: "Login successful", token });
  }
};
module.exports = { userLogin };
