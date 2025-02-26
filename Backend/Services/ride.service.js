const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');


async function getFare(pickup, destination) {

    console.log(pickup, destination);
    

    if(!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    
    const baseFare = {
        auto: 30,
        car: 50,
        bike: 20,
        van: 60
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        bike: 8,
        van: 20
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        bike: 1.5,
        van: 4
    };

    console.log(distanceTime);

    const fare = {
        auto: Math.ceil(baseFare.auto + (perKmRate.auto * (distanceTime.distance.value / 1000)) + (perMinuteRate.auto * (distanceTime.duration.value / 60))),
        car: Math.ceil(baseFare.car + (perKmRate.car * (distanceTime.distance.value / 1000)) + (perMinuteRate.car * (distanceTime.duration.value / 60))),
        bike: Math.ceil(baseFare.bike + (perKmRate.bike * (distanceTime.distance.value / 1000)) + (perMinuteRate.bike * (distanceTime.duration.value / 60))),
        van: Math.ceil(baseFare.van + (perKmRate.van * (distanceTime.distance.value / 1000)) + (perMinuteRate.van * (distanceTime.duration.value / 60))),
        distance : distanceTime.distance,
        duration : distanceTime.duration
    };

    return fare;
}

module.exports.getFare = getFare;


function generateOTP(num) {
    const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
    return otp;
}


module.exports.createRide = async({ user, pickup, destination, vehicleType }) => {

    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, Pickup, Destination and Vehicle type are required');
    }
    console.log('hello');
    
    console.log(user, pickup, destination, vehicleType);
    

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp : generateOTP(4),
        fare: fare[vehicleType]
    });

    return ride;    
}

module.exports.confirmRide = async ({
    rideId, captain
}) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'accepted',
        captain: captain._id
    })

    console.log('Ride services : ', rideId);
    

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').select('+otp')

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;

}



module.exports.startRide = async ({ rideId, otp, captain }) => {
    if (!rideId || !otp) {
        throw new Error('Ride id and OTP are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'ongoing'
    })

    return ride;
}


module.exports.endRide = async ({ rideId, captain }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await rideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('user').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'completed'
    })

    return ride;
}