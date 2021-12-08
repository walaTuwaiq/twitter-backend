const express = require("express");
const loginRoute  = express.Router()

const  {login}  = require("../controller/login")

loginRoute.post("/login" , login )

module.exports = loginRoute