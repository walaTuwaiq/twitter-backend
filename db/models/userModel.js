const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  account: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  description:{type: String},
  imageProfile:{type: String},
  password: { type: String, required: true },
  favorite: [{type: mongoose.Schema.Types.ObjectId, ref: "tweetModel"}]
});

module.exports = mongoose.model("userModel", userModel);
