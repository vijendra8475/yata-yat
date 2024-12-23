const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message : "Unauthorized Token not Found"});
    }

    const isBlackListed = await blackListTokenModel.findOne({ token : token });

    if(isBlackListed){
        return res.status(401).json({message : "Token is Blacklisted in middleware"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        next();
    }
    catch(err){
        return res.status(401).json({message : "Invalid Token"});
    }
}


module.exports.authCaptain = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message : "Unauthorized Token not Found"});
    }

    const isBlackListed = await blackListTokenModel.findOne({ token : token });

    if(isBlackListed){
        return res.status(401).json({message : "Token is Blacklisted in middleware"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await captainModel.findById(decoded._id);

        req.captain = user;
        next();
    }
    catch(err){
        return res.status(401).json({message : "Invalid Token"});
    }
}