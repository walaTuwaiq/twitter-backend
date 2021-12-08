const mongoose = require("mongoose");
// || "mongodb://localhost:27017/twitterDB"
mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);