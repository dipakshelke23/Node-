const mongoose = require("mongoose");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");

let userLogout = async (req, res) => {
  try {
    res.clearCookie("uid");
    res.json({ messege: "Succesfully Logout " });
  } catch (error) {
    res.send(error);
  }
};
module.exports = { userLogout };
