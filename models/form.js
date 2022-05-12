const mongoose = require('mongoose');

const { Schema } = mongoose;

const form = new Schema({
    addrese : String,
    name : String,
    symbol : String
})

module.exports = mongoose.models.Form || mongoose.model("Form",form)