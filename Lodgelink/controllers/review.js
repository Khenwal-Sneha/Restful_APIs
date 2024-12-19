const Review = require("../models/review");
const Listing = require("../models/listing"); // Corrected model import

// add route
module.exports.add = async (req, res, next) => {
    const { id } = req.params;
    try {
        let listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect(`/listings/${id}`);
        }

        const { rating, comment } = req.body;
        let r = new Review({ rating: rating, comment: comment, listing: id, owner: req.user._id });
        await r.save();
        listing.reviews.unshift(r);
        await listing.save();
        req.flash("success", "New Review Created!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error("Error in add route:", err);
        req.flash("error", "Error adding review. Please try again later.");
        res.redirect(`/listings/${id}`);
    }
};

// delete route
module.exports.delete = async (req, res, next) => {
    const { id, id2 } = req.params;
    try {
        const review = await Review.findByIdAndDelete(id2);
        if (!review) {
            req.flash("error", "Review not found!");
            return res.redirect(`/listings/${id}`);
        }

        if (req.user && req.user._id.equals(review.owner._id)) {
            await Listing.findByIdAndUpdate(id, { $pull: { reviews: id2 } });
            req.flash("success", "Your Review was deleted!");
        } else {
            req.flash("error", "You don't have access to delete this review!");
        }
    } catch (err) {
        console.error("Error in delete route:", err);
        req.flash("error", "Error deleting review. Please try again later.");
    }
    res.redirect(`/listings/${id}`);
};
