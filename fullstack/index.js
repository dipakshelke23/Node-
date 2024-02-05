
const express = require('express');
const app = express();
const homeRoute = require('./routes/homes');
const productRoutes = require('./routes/productRoutes'); // Make sure to import productRoutes

const mongoose = require('mongoose');

const dbconnect = async () => {
  try {
    
    await mongoose.connect('mongodb://127.0.0.1/ecommerce');
    console.log("Connected to DB");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};
// Connect to the database
dbconnect();

// Define routes
app.use('/h', homeRoute);
// Middleware
app.use(express.json());

// Routes
app.use('/p',productRoutes);
// Start the server
app.listen(3000, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("Server is running on port 3000");
  }
});
