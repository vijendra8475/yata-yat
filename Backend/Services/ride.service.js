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