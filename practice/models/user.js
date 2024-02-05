const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     phone: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     admin: {
//         type: Boolean,
//         required: true
//     }
// });

// const User = mongoose.model('user', userSchema);
// module.exports = User;
