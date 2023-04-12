const mongoose=require("mongoose");
const tourSchema=require('../schema/tour_schema');

const Tour=mongoose.model('Tours',tourSchema.newTourSchema);

module.exports=Tour;