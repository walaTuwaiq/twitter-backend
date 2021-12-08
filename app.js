const express = require("express");
const app = express();
require('dotenv').config()
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());

///////////////////////////////

const signUpRoute = require("./routers/route/signupRoute");
const loginRoute  = require("./routers/route/loginRoute")
const tweetRoute  = require("./routers/route/tweetRoute")
const accountRoute  = require("./routers/route/accountRoute")
app.use(accountRoute);
app.use(tweetRoute);
app.use(signUpRoute);
app.use(loginRoute);



////////////////////
const Port = 5000;
app.listen(process.env.PORT || Port, () => {
  console.log("server run on 5000 port");
});
