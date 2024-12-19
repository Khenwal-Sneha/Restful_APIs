const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require('multer');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });

const userController = require("../controllers/user");
const asyncWrap = require("../utils/asyncWrap");
const { saveRedirectURL, isLoggedin } = require("../isloggedin");

// Signup routes
router.route("/signup")
    .get(userController.signup) // Render signup form
    .post(asyncWrap(userController.slogic)); // Handle signup logic

// Login routes
router.route("/login")
    .get(userController.login) // Render login form
    .post(saveRedirectURL, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.llogic); // Handle login logic

// Logout route
router.route("/logout")
    .get(isLoggedin, userController.logout); // Handle logout

// User profile route
router.route("/:username")
    .get(isLoggedin, asyncWrap(userController.viewProfile)); // Render user profile

// Profile picture upload routes
router.route("/:username/pfp")
    .get(isLoggedin, userController.renderUploadForm) // Render upload profile picture form
    .post(isLoggedin, upload.single('img'), asyncWrap(userController.upload)); // Handle profile picture upload

// User info route
router.get("/:username/info", asyncWrap(userController.info));

module.exports = router;
