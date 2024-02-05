const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user");

let getUsers = async (req, res) => {
  if (req.user.admin == true) {
    try {
      // console.log(req)
      const users = await User.find();
      // const users = await User.find({name:"B",email:"B@gmail.com"});

      res.status(200).json(users);
    } catch (er) {
      console.log(er);
      res.status(500).json(er);
    }
  } else {
    try {
      // console.log(req)
      const users = await User.find();
      // const users = await User.find({name:"B",email:"B@gmail.com"});
      let tempUsers = [];
      for (let i = 0; i < users.length; i++) {
        tempUsers[i] = users[i].name;
      }
      res.status(200).json(tempUsers);
    } catch (er) {
      console.log(er);
      res.status(500).json(er);
    }
  }
};
let getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (er) {
    //console.log(er)
    res.status(500).json({ error: "User not found" });
  }
};
let addUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (er) {
    console.log(er);
    res.status(500).json(er);
  }
};
let updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    res.status(201).json(user);
  } catch (er) {
    console.log(er);
    res.status(500).json(er);
  }
};
let deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId); // this menthod finds and delete record  from dattabse
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.status(204).send("User deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getUsers, addUsers, updateUser, deleteUser, getUser };
// batches -  Onbordings
// jan     -  completed
// feb     -  completed
// march   -  completed
// april   -  remained but very few got only those who's college TNP gave them recomondation mail.
// may     -  remained but very few got only those who's college TNP gave them recomondation mail.
// june    -  remained
// july    -  remained
