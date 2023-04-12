const mongoose=require("mongoose");
const tourSchema=require('../schema/tour_schema');

exports.NewTour=mongoose.model('Tours',tourSchema.newTourSchema);