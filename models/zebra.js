const mongoose = require("mongoose")
const zebraSchema = mongoose.Schema({
zebra_color: String,
zebra_breed: {type:String,length:15},
zebra_price: {type:Number,min:1000,max:200000}
})
module.exports = mongoose.model("zebra",zebraSchema)