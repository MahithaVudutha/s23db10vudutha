const mongoose = require("mongoose")
const zebraSchema = mongoose.Schema({
zebra_color: String,
zebra_breed: String,
zebra_price: Number
})
module.exports = mongoose.model("zebra",zebraSchema)