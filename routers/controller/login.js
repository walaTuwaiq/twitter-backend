const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  userModel  = require("../../db/models/userModel")

const login = async (req, res) => {
    let { account, password } = req.body;
  
    try {
      const user = await userModel.findOne({ account });
      if (user) {
        const check = await bcrypt.compare(password, user.password);
        if (check === true) {
          const payload = { userId: user._id, userName: user.account };
          const token = jwt.sign(payload, "ABC");
          res.status(201).json({ token });
        } else {
          res.status(403).json("wrong PassWord!");
        }
      } else {
        res.status(404).json("wrong Email!");
      }
    } catch (error) {
      res.send(error);
    }
  };

  module.exports = {login}