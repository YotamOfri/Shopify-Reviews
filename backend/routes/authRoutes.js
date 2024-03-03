const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const loginLimiter = require("../middleware/loginLimiter");
// Form Auth
router.route("/").post(loginLimiter, authController.login);
// Google Auth
router.route("/google").post(loginLimiter, authController.GoogleLogin);
// Facebook Auth
router.route("/facebook").post(loginLimiter, authController.FacebookLogin);
// Refresh Access Token
router.route("/refresh").get(authController.refresh);
// Logout Cookies
router.route("/logout").post(authController.logout);

module.exports = router;
