const mongoose=require("mongoose");

const reviewSchema = mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Review=new mongoose.model("Review",reviewSchema);
module.exports=Review;