const mongoose = require("mongoose");

const tweetModel = new mongoose.Schema({
  text: { type: String, required:true},
  img: { type: String},
  userId:{type: mongoose.Schema.Types.ObjectId, ref: "userModel"}
});

module.exports = mongoose.model("tweetModel", tweetModel);
