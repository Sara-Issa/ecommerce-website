const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  
});

const shopModel = mongoose.model("shop", shopSchema);

module.exports = shopModel;