const express= require("express");
const mongoose= require("mongoose");
const app=express();
const PORT= process.env.PORT || 3000;
const dbConnect=async()=>{
  try {  
    await mongoose.connect('mongodb://127.0.0.1/user');
    console.log("Connected to Database") 
  } catch (error) {
    console.log("Error in connecting the Database")
  }
}
dbConnect();
app.listen(PORT,(er)=>{
    if(er){
        console.log(er);
    }else{
        console.log("Server running on port 3000");
    }
});
// file and imaage uploader
// E-commercee
// Chat -App
// file sharing app
// Vedio Chat App
// Aws Deployment

//React and then full e-commerce app and then deployment

