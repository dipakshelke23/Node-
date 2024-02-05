let express = require('express');
let app = express();
let homeRoute= require('./routes/home');
// let aboutRoute= require('../routes/about');

app.listen(3000,(er)=>{
    if(er){
        console.log(er)
    }else{
        console.log("server is running on 3000")
    }
})


app.use('/home',homeRoute);
