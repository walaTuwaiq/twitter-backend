const express = require("express");
const accountRoute  = express.Router()

const  {profileInfo, usersInfo}  = require("../controller/account")

accountRoute.get("/profile/:id" , profileInfo )
accountRoute.get("/users" , usersInfo )

module.exports = accountRoute