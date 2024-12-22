const userModel = require('../models/user.model');
const userServices = require('../Services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenSchema = require('../models/blacklistToken.model');


module.exports.registerUser = async(req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    const { firstname, lastname, email, password } = req.body;

    const isUserAlreadyExist = await captainModel.findOne({ email });
    if(isUserAlreadyExist){
        return res.status(401).json({ message : "User already exist"})
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userServices.createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user })
}

module.exports.loginUser = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if(!user){
        return res.status(401).json({ message : 'User not found'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message : 'Invalid Credentials'});
    }

    const token = user.generateAuthToken();

    res.cookie('token', token );
    // console.log(token);
    

    res.status(200).json({ token, user });
}


module.exports.getUserProfile = async(req, res, next) => {
    res.status(200).json({ user : req.user });
}

module.exports.logoutUser = async(req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];


    await blacklistTokenSchema.create({ token });

    
    res.status(200).json({ message : 'Logged Out Successfully'});
}