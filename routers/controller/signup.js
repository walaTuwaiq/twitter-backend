const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")
const addUser = async(req, res) => {
  let { account, email, description, imageProfile, password } = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const newUser = new userModel({ account, email, description, imageProfile, password , favorite:[] });
      const response = await newUser.save();
      res.status(201).json(response);
  } catch (error) {
      res.send(error)
  }
};
module.exports = { addUser };