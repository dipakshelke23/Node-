const secretekey = "secrete";
const jwt = require("jsonwebtoken");

let setUser = (user) => {
  console.log("I am in setUser function");
  console.log(user);

  // Convert numeric properties to strings
  const plainUser = {
    _id: user._id.toString(), // Convert ObjectId to string
    name: user.name,
    email: user.email,
    password: user.password.toString(), // Convert password to string
    phone: user.phone.toString(), // Convert phone to string
    address: user.address,
    admin: user.admin,
    __v: user.__v,
  };

  return jwt.sign(plainUser, secretekey);
};

let getUser = (token) => {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, secretekey);
  } catch (error) {
    return null;
  }
};

module.exports = { setUser, getUser };
