const express = require("express");
const signUpRoute = express.Router();

const { addUser } = require("../controller/signup");

signUpRoute.post("/signUp", addUser);

module.exports = signUpRoute;
