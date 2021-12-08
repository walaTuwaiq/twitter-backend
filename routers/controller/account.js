// const tweetModel = require("../../db/models/tweetModel");
const userModel = require("../../db/models/userModel");

const profileInfo = async (req,res)=>{
    const id = req.params.id
    const user = await userModel.find({_id:id}).select("account description imageProfile favorite").populate("favorite")
    res.status(200).json(user)
}


const usersInfo = async(req,res)=>{
    const user = await userModel.find({}).select("account description imageProfile")
    res.status(200).json(user)
}

module.exports = { profileInfo, usersInfo };
