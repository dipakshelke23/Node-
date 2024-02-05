// authMiddleware.js
const jwt = require("jsonwebtoken");
const secretekey = "secrete";
const cookieParser = require("cookie-parser");

const authenticateUser = (req, res, next) => {
  //const token = req.headers.authorization;
  const token = req.cookies.uid;
  // console.log("I am in authenticateUser");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Missing token" });
  }
  try {
    const decoded = jwt.verify(token, secretekey);
    req.user = decoded;
   // console.log(req);
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};


const isAdmin = (req, res, next) => {

  if(req.user.admin==true){
    next();
  }else{
    res.status(400).json({messege:"You are not authorised "})
  }
  
};

module.exports = { authenticateUser,isAdmin  };
