const express = require("express");
const userLogOutController = require("../controllers/userLogout");
const { authenticateUser } = require("../midlwares/authMiddleware");
const router = express.Router();

// Protected route (requires authentication)
router.post("/logout", userLogOutController.userLogout);

module.exports = router;
