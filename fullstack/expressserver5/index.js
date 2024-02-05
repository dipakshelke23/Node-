let express= require('express');
let app=express();

app.listen(3000,(er)=>{
  if(er){
    console.log(er)
 }else{
    console.log("server is running");
 }

})

app.get('/',(req,res)=>{
    res.send('<h1>Data Got</h1>')
})
// product route
app.get('/product',(req,res)=>{
    res.send('<h1>product</h1>')
})
//payment route 
app.get('/payment',(req,res)=>{
    res.send('<h1>payment gateway page</h1>')
})
app.get('/order',(req,res)=>{
    res.send('<h1>order page</h1>')
})
app.get('/home',(req,res)=>{
    res.send('<h1>home page</h1>')
})

app.get('/cart',(req,res)=>{
    res.send('<h1>cart page</h1>')
})

console.log(express)




