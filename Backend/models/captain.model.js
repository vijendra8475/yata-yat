const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [ 3, 'First name must be taleast 3 charactes long']
        },
        lastname : {
            type : String,
            minlength : [ 3, 'Lastname must be atleast 3 characters long']
        }
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true ,
        select : false
    },
    socketId : {
        type : String
    },
    status : {
        type : String,
        enum : ['active','inactive'],
        default : 'inactive'
    },
    vehicle : {
        color : {
            type : String,
            minlength : [ 3, 'color name atleast 3 characters long'],
            required : true
        },
        plate : {
            type : String,
            required : true,
            minlength : [ 3, 'Plate must be atleast 3 characters long']
        },
        capacity : {
            type : Number,
            required : true,
            min : [ 1, 'Capacity must be atleast 1']
        },
        vehicleType : {
            type : String,
            enum : ['Bike', 'Car', 'Auto-Riksha'],
            required : true
        }
    },

    location : {
        lat : {
            type : Number
        },
        lng : {
            type : Number
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id : this._id }, process.env.JWT_SECRET, { expiresIn : '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function( password ) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;