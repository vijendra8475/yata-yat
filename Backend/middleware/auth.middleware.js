const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message : "Unauthorized Token not Found"});
    }

    const isBlackListed = await userModel.findOne({ token : token });

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