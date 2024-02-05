// routes.js
const express = require("express");
const userLoginController = require("../controllers/userLogin");
const { authenticateUser } = require("../midlwares/authMiddleware");
const router = express.Router();

// Protected route (requires authentication)
router.post("/login", userLoginController.userLogin);

module.exports = router;
