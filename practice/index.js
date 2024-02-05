const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const userLoginRoute = require('./routes/userLoginRoute');
const userLogOutRoute = require('./routes/userLogOutRoute');
const cookieParser = require('cookie-parser'); 
app.use(express.json());
app.use(cookieParser());
app.use('/api', userRoute);
app.use('/api', userLoginRoute );
app.use('/api', userLogOutRoute );
const dbconnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/user');
    console.log("Connected to User Database");
  } catch (error) {
    console.log("Error in connecting DB ")
  }
}
dbconnect();

app.listen(3000, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log("Server running on port 3000")
  }
});

