const User = require("../models/user");
const Listing = require("../models/listing");

// Signup form
module.exports.signup = (req, res) => {
    res.render("user/signup.ejs");
};

// Signup logic
module.exports.slogic = async (req, res, next) => {
    try {
        const { name, email, username, password } = req.body;
        const newUser = new User({ name, email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                req.flash("error", "Problem logging in!");
                return res.redirect("/listings");
            }
            req.flash("success", "Welcome to LodgeLink!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", "Username already exists!");
        res.redirect("/signup");
    }
};

// Login form
module.exports.login = (req, res) => {
    res.render("user/login.ejs");
};

// Login logic
module.exports.llogic = (req, res) => {
    if (res.locals.redirectUrl) {
        return res.redirect(res.locals.redirectUrl);
    }
    res.redirect("/listings");
};

// Logout logic
module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            req.flash("error", "Logout Failed, try again!");
            return res.redirect("/listings");
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/listings");
    });
};

// View user profile
module.exports.viewProfile = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/listings");
        }
        const listings = await Listing.find({ owner: user._id });
        res.render("user/profile", { user, listings });
    } catch (err) {
        next(err);
    }
};

// Render upload profile picture form
module.exports.renderUploadForm = (req, res) => {
    res.render("user/upload");
};

// Handle profile picture upload
module.exports.upload = async (req, res, next) => {
    const { username } = req.params;
    const url = req.file.path;
    const filename = req.file.filename;

    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
        req.flash("error", "User not found");
        return res.redirect("/listings");
    }

    // Set the user's image properties
    user.profile = { url, filename };
    await user.save();

    // Redirect to the user's profile
    res.redirect(`/${username}`);
};

// User info
module.exports.info = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/listings");
        }
        const listings = await Listing.find({ owner: user._id }).populate("owner");
        if (user===req.user) {
            res.render("user/profile",{listings,user});
        }
        res.render("user/info", { user, listings });
    } catch (err) {
        next(err);
    }
};
