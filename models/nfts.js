const mongoose = require('mongoose');

const { Schema } = mongoose;

const nfts = new Schema({
    addrese : String,
    name : String,
    symbol : String
})

module.exports = mongoose.models.NFT || mongoose.model("NFT",nfts)